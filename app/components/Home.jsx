import { View, Bar } from 'reapp-kit';
import AuthRequired from '../mixins/AuthRequired';
import Devices from './Devices';
// import Settings from './Settings';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      active: 'DEVICES', // || 'SETTINGS' || ...
    };
  }
  render() {
    return (
      <View
        offsetBottom={49}
        after={
          <Bar {...this.props} title="Home">
            <Bar.Item icon="home">Devices</Bar.Item>
            <Bar.Item icon="person">Settings</Bar.Item>
          </Bar>
      }>
        <Devices />
      </View>
    );
  }
}

export default AuthRequired(Home);
