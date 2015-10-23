import { Reapp, View, List } from 'reapp-kit';
import UsersStore from '../stores/UsersStore';
import UsersActions from '../actions/UsersActions';
import AuthRequired from '../mixins/AuthRequired';

class Home extends React.Component {

  componentDidMount() {
    UsersStore.listen(this.onChange);
    UsersActions.fetchUsers();
  }

  componentWillUnmount() {
    UsersStore.unlisten(this.onChange);
  }

  render() {
    const users = alt.stores.UsersStore.getUsers();
    const usersNodes = users.map( (user) => {
      return <List.Item title={user.get('username')}/>;
    });
    return (
      <View {...this.props} title="Home">
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

export default AuthRequired(Home);
