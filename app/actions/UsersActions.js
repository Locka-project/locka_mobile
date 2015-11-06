class UsersActions {

  constructor() {
    this.generateActions(
      'loginStart',
      'loginSuccess',
      'loginFailed',
      'logout'
    );
  }

  login({identifier, password}) {
    this.actions.loginStart();
    this.dispatch('logging');
    Api.post('/api/auth/local', {identifier, password, api: true})
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
