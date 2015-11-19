import { View, BackButton, Input, List, Title } from 'reapp-kit';
import DevicesActions from '../../actions/DevicesActions';

class DeviceNew extends React.Component {


  render() {
    const backButton = (
      <BackButton onTap={() => window.history.back()} stopPropagation>
        Back
      </BackButton>
    );

    return (
      <View style={{overflow: 'hidden'}} title={[backButton, 'Device', '']}>
        <div>
          <form>
            <Title>Add device</Title>
            <List wrap>
              <Input name="name" ref="name" placeholder="Device Name" />
              <Input name="identifier" ref="identifier" placeholder="Device Identifier" />
            </List>
            <br/>
            <List>
              <List.Item icon={true} title="Create" onClick={this.createDevice.bind(this)} />
            </List>
          </form>
        </div>
      </View>
    );
  }

  createDevice() {
    const currentUser = alt.stores.UsersStore.getCurrentUser();
    const deviceName = this.refs.name.getDOMNode().value;
    const identifier = this.refs.identifier.getDOMNode().value;
    DevicesActions.createDevice({deviceName, identifier, currentUser}).then( () => {
      window.history.back();
    });
  }
}

export default DeviceNew;
