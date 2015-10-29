class UsersActions {

  constructor() {
    this.generateActions(
      'updateUsers',
      'onLoginStart',
      'onLoginSuccess',
      'onLoginFailed',
    );
  }

  fetchUsers() {
    setTimeout( () => {
      const users = Immutable.fromJS([{username: 'John'}, {username: 'Damdam'}, {username: 'Remi'}]);
      this.actions.updateUsers(users);
    }, 2000);
  }

  login({username, password}) {
    this.actions.onLoginStart();
    this.dispatch();
    Api.post('/auth/local', {username, password, api: true})
      .then( (response) => {
        console.log('response:', response);
        // const user = Immutable.fromJS({username: username, password: password});
        // this.dispatch(user);
        // setTimeout( () => {
        //   this.actions.onLoginSuccess(user);
        // }, 500);
      }, (error) => {
        console.log('error:', error);
        this.actions.onLoginFailed();
      });
  }

  updateUsers(users) {
    this.dispatch(users);
  }

  logout() {
    console.log('logging out');
  }

}

export default alt.createActions(UsersActions);
