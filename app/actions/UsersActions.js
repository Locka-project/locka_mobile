class UsersActions {

  constructor() {
    this.generateActions(
      'fetchUsersStart',
      'updateUsers',
    );
  }

  fetchUsers() {
    console.log('fetching users');
    this.actions.fetchUsersStart();
    setTimeout( () => {
      const users = Immutable.fromJS([{name: 'John'}, {name: 'Damdam'}, {name: 'Remi'}]);
      this.actions.updateUsers(users);
    }, 3000);
  }

  updateUsers(users) {
    this.dispatch(users);
  }

}

export default alt.createActions(UsersActions);
