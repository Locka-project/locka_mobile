class DevicesActions {

  constructor() {
    this.generateActions(
      'fetchDevicesSuccess',
      'createDeviceSuccess'
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

}

export default alt.createActions(DevicesActions);
