import DevicesActions from '../actions/DevicesActions';

class DevicesStore {
  constructor() {
    this.bindActions(DevicesActions);
    this.state = Immutable.List();
  }

  onFetchDevicesSuccess({devices}) {
    this.setState(devices);
  }

  onCreateDeviceSuccess({device}) {
    this.setState(alt.stores.DevicesStore.getDevices().push(device));
  }

  static getDevices() {
    return this.getState();
  }

}

export default alt.createStore(DevicesStore, 'DevicesStore');
