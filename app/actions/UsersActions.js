
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
    setTimeout(function () {
      const users = Immutable.fromJS([{name:'John'}, {name:'Damdam'}, {name:'Remi'}]);
      this.actions.updateUsers(users);
    }.bind(this), 3000);
  }

  updateUsers(users) {
    console.log('updating users');
    this.dispatch(users);
  }


}

export default alt.createActions(UsersActions);
