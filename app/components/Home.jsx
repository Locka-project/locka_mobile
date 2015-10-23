import { View, List } from 'reapp-kit';
import UsersStore from '../stores/UsersStore';
import UsersActions from '../actions/UsersActions';

class Home extends React.Component {

  componentDidMount() {
    UsersStore.listen(this.onChange);
    console.log('didMount');
    UsersActions.fetchUsers();
  }

  componentWillUnmount() {
    UsersStore.unlisten(this.onChange);
  }

  render() {
    const users = alt.stores.UsersStore.getUsers();
    const usersNodes = users.map( (user) => {
      return <List.Item title={user.get('name')}/>;
    });
    return (
      <View {...this.props} title="Users">
        <p>Home page</p>
        <List>
          {usersNodes}
        </List>
      </View>
    );
  }

  onChange() {
    this.forceUpdate();
  }
}

export default Home;
