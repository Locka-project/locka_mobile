import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';

class Socket {

  constructor() {
    this.io = sailsIOClient(socketIOClient);
    this.io.sails.url = CONFIG.SOCKET_URL;
    this.io.socket.on('connect', this.onConnect.bind(this));
  }

  onConnect() {
    console.log('SOCKET CONNECTED');

    this.io.socket.get(CONFIG.API_URL + '/api/user/subscribe',
      {access_token: alt.stores.UsersStore.getAuthenticationToken()},
      (data, jwr) => {
        console.log('SOCKET Subscribe', data, jwr);
      }
    );

    this.io.socket.on('device', (response) => {
      console.log('received device', response.data);
      const device = Immutable.fromJS(response.data);
      alt.actions.DevicesActions.socketReceiveDeviceSuccess({device});
    });
  }
}

export default Socket;
