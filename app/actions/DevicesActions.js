class DevicesActions {

  constructor() {
    this.generateActions(
      'fetchDevicesSuccess',
      'createDeviceSuccess',
      'editDeviceSuccess',
      'deleteDeviceSuccess'
      'socketReceiveDeviceSuccess'
    );
  }

  fetchDevices() {
    return Api.get('/api/device/getAllDevices', {})
    .then( (devices) => {
      this.actions.fetchDevicesSuccess({devices});
    }, (error) => {
      console.log('error:', error);
    });
  }

  createDevice({deviceName, currentUser}) {
    return Api.post('/api/device/create', {name: deviceName, user: currentUser})
    .then( (device) => {
      this.actions.createDeviceSuccess({device});
    }, (error) => {
      console.log('error creating device', error);
    });
  }

  editDevice({deviceId, deviceName}) {
    return Api.put('/api/device/update', {id: deviceId, name: deviceName})
      .then( (device) => {
        this.actions.editDeviceSuccess({device: device.first()});
      }, (error) => {
        console.log('error editing device', error);
      });
  }

  updateStateDevice({deviceId, deviceState}) {
    let url = '/api/device/close';
    if (deviceState) {
      url = '/api/device/open';
    }
    return Api.put(url, {id: deviceId})
      .then((device) => {
        this.actions.editDeviceSuccess({device: device.first()});
      }, (error) => {
        console.log('error editing device', error);
      });
  }

  deleteDevice({deviceId}) {
    return Api.delete('/api/device/delete', {id: deviceId})
      .then( (res) => {
        this.actions.deleteDeviceSuccess({deviceId});
      }, (error) => {
        console.log('error editing device', error);
      });
  }

}

export default alt.createActions(DevicesActions);
