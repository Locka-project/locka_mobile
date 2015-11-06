import { View, List, Label } from 'reapp-kit';
import UsersStore from '../stores/UsersStore';

const styles = {
  logout: {
    color: 'red',
    fontWeight: '300',
  },
};

class Settings extends React.Component {

  componentDidMount() {
    UsersStore.listen(this.onChange);
  }

  componentWillUnmount() {
    UsersStore.unlisten(this.onChange);
  }

  render() {
    const currentUser = alt.stores.UsersStore.getCurrentUser();
    let titleSub;
    if (currentUser.get('firstname')) {
      titleSub = currentUser.get('firstname') + ' ' + currentUser.get('lastname');
    }
    return (
      <View style={{overflow: 'hidden'}} title="Settings">
        <br/>
        <Label>Logged in as</Label>
        <List>
          <List.Item title={currentUser.get('username')} titleSub={titleSub}></List.Item>
        </List>
        <br/>
        <List>
          <List.Item onTap={this.logout} title={
            <Label style={styles.logout}>Logout</Label>
          }></List.Item>
        </List>
      </View>
    );
  }

  logout() {
    alt.actions.UsersActions.logout();
    this.router().transitionTo('login');
  }

  onChange() {
    this.forceUpdate();
  }

}

export default Settings;
