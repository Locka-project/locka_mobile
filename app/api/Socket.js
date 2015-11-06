import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';

class Socket {

  constructor() {
    this.io = sailsIOClient(socketIOClient);
    this.io.sails.url = CONFIG.SOCKET_URL;
    this.io.socket.on('connect', this.subscribe.bind(this));
  }

  subscribe() {
    console.log('SOCKET CONNECTED');
    const currentUser = alt.stores.UsersStore.getCurrentUser();
    if (currentUser) {
      this.io.socket.get(CONFIG.API_URL + `/api/users/${currentUser.get('id')}/subscribe`,
        {access_token: alt.stores.UsersStore.getAuthenticationToken()},
        (data, jwr) => {
          console.log('SOCKET Subscribe', data, jwr);
        }
      );

      this.io.socket.on('device', (response) => {
        console.log('SOCKET received device', response.data);
        const device = Immutable.fromJS(response.data);
        alt.actions.DevicesActions.socketReceiveDeviceSuccess({device});
      });
    }
  }
}

export default Socket;
