import UsersActions from '../actions/UsersActions';
import localstorage from 'localstorage';

class UsersStore {
  constructor() {
    this.bindActions(UsersActions);
    const savedUsersStore = localstorage.getItem('UsersStore');
    if (savedUsersStore) {
      this.state = Immutable.fromJS(JSON.parse(savedUsersStore).UsersStore);
      // const currentUser = this.state.get('currentUser');
      setTimeout(() => {
        UsersActions.fetchCurrentUser();
      }, 1000);
    } else {
      this.state = Immutable.fromJS({
        currentUser: null,
        authToken: null,
        status: '',
      });
    }
  }

  onLoginStart() {
    this.setState(this.state.set('status', 'logging'));
  }

  onLoginSuccess({user, token}) {
    this.setState(this.state.set('currentUser', user)
      .set('authToken', token)
      .set('status', ''));
    this.saveStore();
    Socket.subscribe();
  }

  onLoginFailed() {
    this.setState(this.state.set('status', 'failed'));
  }

  onLogout() {
    this.setState(this.state.set('currentUser', null)
      .set('authToken', null)
      .set('status', ''));
    this.saveStore();
  }

  onFetchCurrentUser({user}) {
    this.setState(this.state.set('currentUser', user));
    this.saveStore();
  }

  saveStore() {
    localstorage.setItem('UsersStore', alt.takeSnapshot(alt.stores.UsersStore));
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
