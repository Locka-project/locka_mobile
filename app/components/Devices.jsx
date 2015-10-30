import { View } from 'reapp-kit';
import DevicesList from './home/DevicesList';

class Devices extends React.Component {

  render() {
    return (
      <View {...this.props} title="Devices">
        <DevicesList />
      </View>
    );
  }
}

export default Devices;
