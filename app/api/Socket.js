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

    io.socket.get(CONFIG.API_URL + '/api/user/subscribe',
      {access_token: alt.stores.UsersStore.getAuthenticationToken()},
      (data, jwr) => {
        console.log('subscribe response', data, jwr);
      }
    );

    this.io.socket.on('device', (data) => {
      console.log('received device', data);
      alt.actions.DevicesActions.socketReceiveDevice({device: data});
    });
  }
}

export default Socket;
