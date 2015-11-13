import Api from '../api/Api';

class UsersActions {

  constructor() {
    this.generateActions(
      'loginStart',
      'loginSuccess',
      'loginFailed',
      'logout',
      'fetchCurrentUserSuccess'
    );
  }

  fetchCurrentUser() {
    const currentUser = alt.stores.UsersStore.getCurrentUser();
    return Api.get(`/api/users/${currentUser.get('id')}`, {})
      .then( (user) => {
        this.dispatch({user});
      }, (error) => {
        console.log('error:', error);
      });
  }

  login({identifier, password}) {
    this.actions.loginStart();
    this.dispatch('logging');
    Api.post('/api/auth/local', {identifier, password})
    .then( (response) => {
      const token = response.get('token');
      const user = response.get('user');
      this.dispatch({user, token});
      this.actions.loginSuccess({user, token});
    }, (error) => {
      this.actions.loginFailed(error);
    });
  }

}

export default alt.createActions(UsersActions);
