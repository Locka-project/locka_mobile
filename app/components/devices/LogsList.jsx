import { View, BackButton, Button, Checkbox, Input, List, Title } from 'reapp-kit';
import LogsStore from '../../stores/LogsStore';
import LogsActions from '../../actions/LogsActions';

class LogsList extends React.Component {

  componentDidMount() {
    LogsStore.listen(this.onChange);
    LogsActions.fetchDeviceLogs({device: this.props.device});
  }

  componentWillUnmount() {
    LogsStore.unlisten(this.onChange);
  }

  render() {
    const device = this.props.device;
    const logs = LogsStore.getDeviceLogs(device.get('id'));
    if (!logs) { return false; }
    const logsNodes = logs.sort((a, b) => {
      return a.get('created_at') > b.get('created_at') ? 1 : -1;
    }).map( (log, i) => {
      return <List.Item key={i} title={log.get('description')} />;
    });
    return (
      <div>
        <Title>Logs</Title>
        <List>
          {logsNodes}
        </List>
      </div>
    );
  }

  onChange() {
    this.forceUpdate();
  }

}

export default LogsList;
