import { Input, List, Checkbox } from 'reapp-kit';
import DevicesActions from '../../actions/DevicesActions';

class DeviceItem extends React.Component {

  constructor() {
    super();
    this.state = {
      updatingCheckbox: false,
    };
  }
  render() {
    const device = this.props.device;
    return (
      <List.Item {...this.props} title={device.get('name')}
         titleSub={device.get('state')}
         onTap={this.editDevicePage.bind(this)}
         after={<Checkbox type="checkbox" onChange={this.onCheck} checked={device.get('state') === 'open'} />}>
      </List.Item>
    );
  }

  onCheck(closed) {
    this.setState({updatingCheckbox: true});
    const deviceId = this.props.device.get('id');
    const deviceState = !closed;
    DevicesActions.updateStateDevice({deviceId, deviceState});
    setTimeout(() => {
      this.setState({updatingCheckbox: false});
    }, 200);
  }

  editDevicePage() {
    if (this.state.updatingCheckbox) { return; }
    this.router().transitionTo('deviceDetail', {deviceId: this.props.device.get('id')});
  }
}

export default DeviceItem;
