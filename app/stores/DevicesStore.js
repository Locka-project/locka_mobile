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
    var newDevice = device;
    var devices = alt.stores.DevicesStore.getDevices();
    var index = devices.findIndex((d) => {
      return d.get('id') == newDevice.get('id');
    });
    var newList = devices.update(index, (oldDevice) => {
      return newDevice;
    });
    this.setState(newList);
  }

  static getDevices() {
    return this.getState();
  }

  static get(deviceId){
    return this.getState().find((device) => {
      return device.get('id') == deviceId;
    })
  }

}

export default alt.createStore(DevicesStore, 'DevicesStore');
