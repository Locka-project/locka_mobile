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

  onEditDeviceSuccess({device}) {
    const devices = alt.stores.DevicesStore.getDevices();
    const index = devices.findIndex((d) => {
      return d.get('id') === device.get('id');
    });
    this.setState(devices.update(index, () => { return device; }));
  }

  onSocketReceiveDeviceSuccess({device}) {
    const devices = alt.stores.DevicesStore.getDevices();
    const index = devices.findIndex((d) => {
      return d.get('id') === device.get('id');
    });
    this.setState(devices.update(index, () => { return device; }));
  }

  static getDevices() {
    return this.getState();
  }

  static get(deviceId) {
    return this.getState().find((device) => {
      return device.get('id') === Number.parseInt(deviceId, 0);
    });
  }

  onDeleteDeviceSuccess({deviceId}) {
    var devices = alt.stores.DevicesStore.getDevices();
    var index = devices.findIndex((d) => {
      return d.get('id') == deviceId;
    });
    var newList = devices.delete(index);
    this.setState(newList);
  }

}

export default alt.createStore(DevicesStore, 'DevicesStore');
