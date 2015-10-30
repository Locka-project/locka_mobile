class DevicesActions {

  constructor() {
    this.generateActions(
      'fetchDevicesSuccess'
    );
  }

  fetchDevices() {
    Api.get('/api/device/getAllDevices', {})
    .then( (devices) => {
      this.actions.fetchDevicesSuccess({devices});
    }, (error) => {
      console.log('error:', error);
    });
  }

}

export default alt.createActions(DevicesActions);
