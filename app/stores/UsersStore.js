import UsersActions from '../actions/UsersActions';

class UsersStore {
  constructor() {
    this.bindActions(UsersActions);

    this.state = Immutable.fromJS({
      users: [],
      currentUser: {},
    });
  }

  onUpdateUsers(users) {
    this.setState(this.state.set('users', this.state.get('users').merge(users)));
  }

  onLoginSuccess(user) {
    this.setState(this.state.set('currentUser', user)
      .set('users', this.state.get('users').merge([user])));
  }

  static getUsers() {
    return this.getState().get('users');
  }

  static getCurrentUser() {
    return this.getState().get('currentUser');
  }

}

export default alt.createStore(UsersStore, 'UsersStore');
