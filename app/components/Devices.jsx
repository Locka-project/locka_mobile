import { View } from 'reapp-kit';
import DevicesList from './devices/DevicesList';

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
