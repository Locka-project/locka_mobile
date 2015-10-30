import { View, Button, BackButton, Input, List, Title } from 'reapp-kit';

class DeviceNew extends React.Component {


  render() {

    var backButton =
      <BackButton onTap={() => window.history.back()} stopPropagation>
        Back
      </BackButton>

    return (
      <View title={[backButton, 'Device', '']}>
        <div>
          <form>
            <Title>Add device</Title>
            <List wrap>
              <Input name="name" ref="name" placeholder="Device Name" />
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
    alt.actions.DevicesActions.createDevice({deviceName, currentUser}).then( () => {
      window.history.back();
    });
  }
}

export default DeviceNew;
