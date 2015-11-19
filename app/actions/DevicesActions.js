import Api from '../api/Api';

class DevicesActions {

  constructor() {
    this.generateActions(
      'fetchDevicesSuccess',
      'createDeviceSuccess',
      'editDeviceSuccess',
      'deleteDeviceSuccess',
      'socketReceiveDeviceSuccess'
    );
  }

  fetchDevices() {
    return Api.get('/api/devices', {})
    .then( (devices) => {
      this.actions.fetchDevicesSuccess({devices});
    }, (error) => {
      console.log('error:', error);
    });
  }

  createDevice({deviceName, identifier, currentUser}) {
    return Api.post('/api/devices/create', {name: deviceName, identifier, user: currentUser})
    .then( (device) => {
      this.actions.createDeviceSuccess({device});
    }, (error) => {
      console.log('error creating device', error);
    });
  }

  editDevice({deviceId, deviceName}) {
    return Api.put(`/api/devices/${deviceId}/update`, {name: deviceName})
      .then( (device) => {
        this.actions.editDeviceSuccess({device});
      }, (error) => {
        console.log('error editing device', error);
      });
  }

  updateStateDevice({deviceId, deviceState}) {
    let url = `/api/devices/${deviceId}/close`;
    if (deviceState) {
      url = `/api/devices/${deviceId}/open`;
    }
    return Api.put(url, {})
      .then((device) => {
        this.actions.editDeviceSuccess({device});
      }, (error) => {
        console.log('error editing device state', error);
      });
  }

  deleteDevice({deviceId}) {
    return Api.delete(`/api/devices/${deviceId}/delete`, {})
      .then( () => {
        this.actions.deleteDeviceSuccess({deviceId});
      }, (error) => {
        console.log('error deleting device', error);
      });
  }

}

export default alt.createActions(DevicesActions);
