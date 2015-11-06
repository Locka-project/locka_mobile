import { Reapp, View, Bar } from 'reapp-kit';
import AuthRequired from '../mixins/AuthRequired';

const styles = {
  iconStyles: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
};

const routes = ['devices', 'settings'];

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  componentDidMount() {
    const currentRoutes = this.router().getCurrentRoutes();
    if (currentRoutes.length >= 3) {
      this.setState({activeTab: routes.indexOf(currentRoutes[2].name)});
    }
  }

  render() {
    return (
      <View
        offsetBottom={49}
        disableScroll={true}
        after={
          <Bar activeIndex={this.state.activeTab}>
            <Bar.Item
              icon={require('reapp-kit/icons/key.svg')}
              iconProps={{style: styles.iconStyles}}
              onTap={() => this.changeTab(0)}>
              Devices
            </Bar.Item>
            <Bar.Item
              icon={require('reapp-kit/icons/phone.svg')}
              iconProps={{style: styles.iconStyles}}
              onTap={() => this.changeTab(1)}>
              Settings
            </Bar.Item>
          </Bar>
      }>
        {this.props.child()}
      </View>
    );
  }

  changeTab(tabIndex) {
    this.setState({activeTab: tabIndex});
    this.router().transitionTo(routes[tabIndex]);
  }

}

export default AuthRequired(Reapp(Home));
