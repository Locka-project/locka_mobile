import UsersActions from '../actions/UsersActions';

class UsersStore {
  constructor() {
    this.bindActions(UsersActions);

    this.state = Immutable.fromJS({
      currentUser: {},
      authToken: null,
      status: '',
    });
  }

  onLoginStart() {
    this.setState(this.state.set('status', 'logging'));
  }

  onLoginSuccess({user, token}) {
    this.setState(this.state.set('currentUser', user)
      .set('authToken', token)
      .set('status', ''));
  }

  onLoginFailed() {
    this.setState(this.state.set('status', 'failed'));
  }

  static getStatus() {
    return this.getState().get('status');
  }

  static getCurrentUser() {
    return this.getState().get('currentUser');
  }

  static getAuthenticationToken() {
    return this.getState().get('authToken');
  }

}

export default alt.createStore(UsersStore, 'UsersStore');
