
import UsersActions from '../actions/UsersActions'

class UsersStore {
  constructor() {
    this.bindActions(UsersActions);

    this.state = Immutable.fromJS({
      users: []
    });
  }

  onFetchUsersStart() {
    this.setState({users: Immutable.List()});
  }

  onUpdateUsers(users) {
    this.setState(this.state.set('users', users));
  }

  static getUsers() {
    return this.getState().get('users');
  }
}

export default alt.createStore(UsersStore, 'UsersStore');
