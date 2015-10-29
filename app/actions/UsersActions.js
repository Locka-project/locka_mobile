class UsersActions {

  constructor() {
    this.generateActions(
      'loginStart',
      'loginSuccess',
      'loginFailed',
    );
  }

  login({identifier, password}) {
    this.actions.loginStart();
    this.dispatch('logging');
    Api.post('/auth/local/', {identifier, password, api: true})
    .then( (response) => {
      const token = response.get('token');
      const user = response.get('user');
      this.dispatch({user, token});
      this.actions.loginSuccess({user, token});
    }, (error) => {
      this.actions.loginFailed(error);
    });
  }

  logout() {
    console.log('logging out');
  }

}

export default alt.createActions(UsersActions);
