import { List } from 'reapp-kit';

class DeviceItem extends React.Component {

  render() {
    const device = this.props.device;

    return (
      <List.Item title={device.get('name')} onTap={this.showDetailsDevicePage.bind(this)} icon={true}>
        { 'lol' }
      </List.Item>
    );
  }

  showDetailsDevicePage() {
    this.router().transitionTo('deviceDetails', {deviceId:this.props.device.id});
  }
}

export default DeviceItem;
