class UsersActions {

  constructor() {
    this.generateActions(
      'updateUsers',
      'onLoginSuccess',
    );
  }

  fetchUsers() {
    setTimeout( () => {
      const users = Immutable.fromJS([{username: 'John'}, {username: 'Damdam'}, {username: 'Remi'}]);
      this.actions.updateUsers(users);
    }, 2000);
  }

  login({username, password}) {
    const user = Immutable.fromJS({username: username, password: password});
    this.dispatch(user);
    setTimeout( () => {
      this.actions.onLoginSuccess(user);
    }, 500);
  }

  updateUsers(users) {
    this.dispatch(users);
  }

}

export default alt.createActions(UsersActions);
