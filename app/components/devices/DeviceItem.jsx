import { List } from 'reapp-kit';

class DeviceItem extends React.Component {

  render() {
    const device = this.props.device;

    return (
      <List.Item title={device.get('name')}>
        { 'lol' }
      </List.Item>
    );
  }

}

export default DeviceItem;
