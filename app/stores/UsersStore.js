import UsersActions from '../actions/UsersActions';

class UsersStore {
  constructor() {
    this.bindActions(UsersActions);

    this.state = Immutable.fromJS({
      users: [],
      currentUser: {},
      status: '',
      authToken: null,
    });
  }

  onUpdateUsers(users) {
    this.setState(this.state.set('users', this.state.get('users').merge(users)));
  }

  onLoginStart() {
    this.setState(this.state.set('status', 'logging'));
  }

  onLoginSuccess(user) {
    this.setState(this.state.set('currentUser', user)
      .set('users', this.state.get('users').merge([user]))
      .set('status', ''));
  }

  onLoginFailed() {
    this.setState(this.state.set('status', 'failed'));
  }

  static getStatus() {
    return this.getState().get('status');
  }

  static getUsers() {
    return this.getState().get('users');
  }

  static getCurrentUser() {
    return this.getState().get('currentUser');
  }

  static getAuthenticationToken() {
    return this.getState().get('authToken');
  }

}

export default alt.createStore(UsersStore, 'UsersStore');
