import { List } from 'reapp-kit';
import DevicesStore from '../../stores/DevicesStore';
import DeviceItem from './DeviceItem';

class DevicesList extends React.Component {

  componentDidMount() {
    DevicesStore.listen(this.onChange);
    alt.actions.DevicesActions.fetchDevices();
  }

  componentWillUnmount() {
    DevicesStore.unlisten(this.onChange);
  }

  render() {
    const devices = alt.stores.DevicesStore.getDevices();
    const devicesNodes = devices.map( (device, i) => {
      return <DeviceItem key={i} device={device}/>;
    });

    return (
      <div>
        <p onClick={() => {alt.actions.DevicesActions.fetchDevices();}}>Your devices</p>
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
