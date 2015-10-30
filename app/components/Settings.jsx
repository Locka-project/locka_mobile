import { View, Button } from 'reapp-kit';

class Settings extends React.Component {

  render() {
    return (
      <View {...this.props} title="Settings">
        <br/>
        <Button onTap={this.logout}>{"Logout"}</Button>
      </View>
    );
  }

  logout() {
    alt.actions.UsersActions.logout();
    this.router().transitionTo('login');
  }

}

export default Settings;
