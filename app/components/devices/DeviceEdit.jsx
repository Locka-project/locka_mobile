import { View, Button, BackButton, Input, List, Title } from 'reapp-kit';
import DevicesStore from '../../stores/DevicesStore';

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

    var backButton =
      <BackButton onTap={() => window.history.back()} stopPropagation>
        Back
      </BackButton>
    var deleteButton = <Button chromeless onTap={ () => {this.deleteDevice(deviceId)} }>Delete</Button>;

    return (
      <View title={[backButton, device.get('name'), deleteButton]}>
        <div>
          <form>
            <Title>Name</Title>
            <List wrap>
              <Input name="name" ref="name" placeholder="Device Name" defaultValue={ device.get('name') }/>
            </List>
            <Title>State</Title>
            <List wrap>
              <Input type="checkbox" label={ device.get('state').toUpperCase() } onChange={this.onCheck} checked={ device.get('state')=='open' } />
            </List>
            <br/>
            <List>
              <List.Item icon={true} title="Edit" onClick={this.editDevice.bind(this)} />
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
    alt.actions.DevicesActions.deleteDevice( {deviceId} )
    window.history.back();
  }

  onCheck(closed) {
    const deviceId = this.router().getCurrentParams().deviceId;
    const deviceState = !closed;
    alt.actions.DevicesActions.updateStateDevice({deviceId, deviceState});
  }

  editDevice() {
    const deviceId = this.router().getCurrentParams().deviceId;
    const deviceName = this.refs.name.getDOMNode().value;
    alt.actions.DevicesActions.editDevice({deviceId, deviceName});
    //window.history.back();
  }
}

export default DeviceEdit;
