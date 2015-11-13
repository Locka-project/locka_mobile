import { Reapp, View, Button } from 'reapp-kit';
import DevicesList from './devices/DevicesList';
import DevicesActions from '../actions/DevicesActions';

class Devices extends React.Component {

  render() {
    const addButton = <Button isInTitleBar={true} chromeless onTap={this.showNewDevicePage.bind(this)}>Add</Button>;
    const refreshButton = <Button isInTitleBar={true} chromeless onTap={() => {DevicesActions.fetchDevices();}}>Refresh</Button>;
    return (
      <div {...this.props.viewListProps}>
          <View style={{overflow: 'hidden'}} title={[refreshButton, 'Devices', addButton]}>
            <DevicesList />
          </View>
          {this.props.child()}
      </div>
    );
  }

  showNewDevicePage() {
    this.router().transitionTo('deviceNew');
  }
}

export default Reapp(Devices);
