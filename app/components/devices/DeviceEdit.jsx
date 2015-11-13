import { View, BackButton, Button, Checkbox, Input, List, Title } from 'reapp-kit';
import DevicesStore from '../../stores/DevicesStore';
import DevicesActions from '../../actions/DevicesActions';

class DeviceEdit extends React.Component {

  componentDidMount() {
    DevicesStore.listen(this.onChange);
  }

  componentWillUnmount() {
    DevicesStore.unlisten(this.onChange);
  }

  render() {
    const deviceId = this.router().getCurrentParams().deviceId;
    const device = alt.stores.DevicesStore.get(deviceId);
    const backButton = (
      <BackButton onTap={() => window.history.back()} stopPropagation>
        Back
      </BackButton>
    );

    const saveButton = <Button chromeless onTap={this.editDevice.bind(this)}>Save</Button>;

    if (!device) {
      return <View style={{overflow: 'hidden'}} title={[backButton, '...', '']}/>;
    }

    return (
      <View style={{overflow: 'hidden'}} title={[backButton, device.get('name'), saveButton]}>
        <div>
          <form>
            <Title>Name</Title>
            <List wrap>
              <Input name="name" ref="name" placeholder="Device Name" defaultValue={ device.get('name') }/>
            </List>
            <Title>State</Title>
            <List>
              <List.Item title={device.get('state').toUpperCase()}
                titleAfter={<Checkbox  onChange={this.onCheck} checked={ device.get('state') === 'open' }/>}>
              </List.Item>
            </List>
          </form>
        </div>
      </View>
    );
  }

  onChange() {
    this.forceUpdate();
  }

  deleteDevice(deviceId) {
    DevicesActions.deleteDevice( {deviceId} )
    window.history.back();
  }

  onCheck(closed) {
    const deviceId = this.router().getCurrentParams().deviceId;
    const deviceState = !closed;
    DevicesActions.updateStateDevice({deviceId, deviceState});
  }

  editDevice() {
    const deviceId = this.router().getCurrentParams().deviceId;
    const deviceName = this.refs.name.getDOMNode().value;
    DevicesActions.editDevice({deviceId, deviceName});
  }
}

export default DeviceEdit;
