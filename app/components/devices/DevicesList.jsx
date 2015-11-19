import { List } from 'reapp-kit';
import DevicesStore from '../../stores/DevicesStore';
import DeviceItem from './DeviceItem';
import DevicesActions from '../../actions/DevicesActions';

class DevicesList extends React.Component {

  componentDidMount() {
    DevicesStore.listen(this.onChange);
    DevicesActions.fetchDevices();
  }

  componentWillUnmount() {
    DevicesStore.unlisten(this.onChange);
  }

  render() {
    const devices = alt.stores.DevicesStore.getDevices();
    const devicesNodes = devices.sort((a, b) => {
      return a.get('created_at') > b.get('created_at') ? 1 : -1;
    }).map( (device, i) => {
      return <DeviceItem key={i} device={device}/>;
    });

    return (
      <div>
        <p onClick={() => {DevicesActions.fetchDevices();}}>Your devices</p>
        <List>
          {devicesNodes}
        </List>
      </div>
    );
  }

  onChange() {
    this.forceUpdate();
  }
}

export default DevicesList;
