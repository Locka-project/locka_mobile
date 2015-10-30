import { View, Button, BackButton } from 'reapp-kit';

class DeviceNew extends React.Component {


  render() {

    var backButton =
      <BackButton onTap={() => window.history.back()} stopPropagation>
        Back
      </BackButton>

    return (
      <View title={[backButton, 'Device', '']}>
        {'coucou'}
      </View>
    );
  }
}

export default DeviceNew;
