import { View, Button, BackButton, Input, List, Title } from 'reapp-kit';

class DeviceItem extends React.Component {

  render() {
    const device = this.props.device;

    return (
      <List wrap>
        <Input type="checkbox" label={device.get('name')} onChange={this.onCheck} checked={ device.get('state')=='open' } />
      </List>
    );
  }

  onCheck(closed) {
    const deviceId = this.props.device.get('id');
    const deviceState = !closed;
    alt.actions.DevicesActions.updateStateDevice({deviceId, deviceState});
  }

  editDevicePage() {
    this.router().transitionTo('deviceEdit', {deviceId:this.props.device.get('id')});
  }
}

export default DeviceItem;
