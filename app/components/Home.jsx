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

  render() {
    const BarItem = Bar.Item;
    return (
      <View
        offsetBottom={49}
        disableScroll={true}
        after={
          <Bar>
            <BarItem active={this.state.activeTab === 0}
              icon={require('reapp-kit/icons/key.svg')}
              iconProps={{style: styles.iconStyles}}
              onTap={() => this.changeTab(0)}>
              Devices
            </BarItem>
            <BarItem active={this.state.activeTab === 1}
              icon={require('reapp-kit/icons/phone.svg')}
              iconProps={{style: styles.iconStyles}}
              onTap={() => this.changeTab(1)}>
              Settings
            </BarItem>
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
