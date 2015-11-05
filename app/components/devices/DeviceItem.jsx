import { View, Button, BackButton, Input, Label, List, Title } from 'reapp-kit';

class DeviceItem extends React.Component {

  render() {
    const device = this.props.device;

    return (
      <List.Item title={<Label onClick={this.editDevicePage.bind(this)}>{device.get('name')}</Label>}
                 titleAfter={<Input type="checkbox" onChange={this.onCheck} checked={ device.get('state')=='open' } />}
        >

      </List.Item>
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