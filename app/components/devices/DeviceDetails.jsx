import { View, Button, BackButton, List, Title } from 'reapp-kit';

class DeviceNew extends React.Component {


  render() {
    const deviceId = this.router().getCurrentParams().deviceId;
    const device = alt.stores.DevicesStore.get(deviceId);

    const backButton = (
      <BackButton onTap={() => window.history.back()} stopPropagation>
        Back
      </BackButton>
    );
    const editButton = <Button chromeless onTap={this.editDevicePage.bind(this)}>Edit</Button>;

    return (
      <View style={{overflow: 'hidden'}} title={[backButton, device.get('name'), editButton]}>
        <div>
          <Title>Name</Title>
          <List>
            <List.Item
              title={device.get('name')}>
            </List.Item>
          </List>
          <Title>State</Title>
          <List>
            <List.Item
              title={device.get('state')}>
            </List.Item>
          </List>
        </div>
      </View>
    );
  }

  editDevicePage() {
    this.router().transitionTo('deviceEdit');
  }
}

export default DeviceNew;
