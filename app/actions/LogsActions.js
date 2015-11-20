import Api from '../api/Api';

class LogsActions {

  constructor() {
    this.generateActions(
      'fetchDeviceLogsSuccess',
      'socketReceiveLogSuccess'
    );
  }

  fetchDeviceLogs({device}) {
    return Api.get(`/api/devices/${device.get('id')}/logs`, {})
    .then( (logs) => {
      this.actions.fetchDeviceLogsSuccess({device, logs});
    }, (error) => {
      console.log('error:', error);
    });
  }

}

export default alt.createActions(LogsActions);
