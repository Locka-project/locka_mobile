import LogsActions from '../actions/LogsActions';

class LogsStore {
  constructor() {
    this.bindActions(LogsActions);
    this.state = Immutable.Map();
  }

  onFetchDeviceLogsSuccess({device, logs}) {
    this.setState(this.state.set(device.get('id'), logs));
  }

  onSocketReceiveLogSuccess({log}) {
    console.log('Received Log', log);
    // const logs = alt.stores.LogsStore.getLogs();
    // const index = logs.findIndex((l) => {
    //   return l.get('id') === log.get('id');
    // });
    // this.setState(logs.update(index, () => { return log; }));
  }

  static getDeviceLogs(deviceId) {
    return this.getState().get(deviceId);
  }

}

export default alt.createStore(LogsStore, 'LogsStore');
