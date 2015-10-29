import { View } from 'reapp-kit';
import AuthRequired from '../mixins/AuthRequired';
import DevicesList from './home/DevicesList';

class Home extends React.Component {

  render() {
    return (
      <View {...this.props} title="Home">
        <DevicesList />
      </View>
    );
  }
}

export default AuthRequired(Home);
