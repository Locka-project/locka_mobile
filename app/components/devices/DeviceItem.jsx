import { Input, List } from 'reapp-kit';

class DeviceItem extends React.Component {

  render() {
    const device = this.props.device;
    return (
      <List.Item {...this.props} title={device.get('name')} titleAfter={device.get('state')} onTap={this.editDevicePage.bind(this)}>

      </List.Item>
    );
  }

  onCheck(closed) {
    const deviceId = this.props.device.get('id');
    const deviceState = !closed;
    alt.actions.DevicesActions.updateStateDevice({deviceId, deviceState});
  }

  editDevicePage() {
    this.router().transitionTo('deviceEdit', {deviceId: this.props.device.get('id')});
  }
}

export default DeviceItem;
