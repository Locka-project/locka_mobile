import {View, List } from 'reapp-kit';
import DevicesStore from '../stores/DevicesStore';
import AuthRequired from '../mixins/AuthRequired';

class Home extends React.Component {

  componentDidMount() {
    DevicesStore.listen(this.onChange);
    alt.actions.DevicesActions.fetchDevices();
  }

  componentWillUnmount() {
    DevicesStore.unlisten(this.onChange);
  }

  render() {
    const devices = alt.stores.DevicesStore.getDevices();
    const devicesNodes = devices.map( (device) => {
      return <List.Item key={device.get('name')} title={device.get('name')}/>;
    });
    return (
      <View {...this.props} title="Home">
        <p onClick={() => {alt.actions.DevicesActions.fetchDevices();}}>Your devices</p>
        <List>
          {devicesNodes}
        </List>
      </View>
    );
  }

  onChange() {
    this.forceUpdate();
  }
}

export default AuthRequired(Home);
