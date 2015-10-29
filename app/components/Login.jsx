import { Reapp, View, List, Input } from 'reapp-kit';
import UsersActions from '../actions/UsersActions';
import UsersStore from '../stores/UsersStore';

const styles = {
  container: {
    background: '-webkit-linear-gradient(90deg, #ffd194 10%, #70e1f5  90%)',
  },
  form: {
    marginTop: 0,
  },
  icon: {
    fontSize: 100,
    textAlign: 'center',
  },
};

class Login extends React.Component {

  componentDidMount() {
    UsersStore.listen(this.onChange);
  }

  componentWillUnmount() {
    UsersStore.unlisten(this.onChange);
  }

  render() {
    return (
      <View>
        <div className="fullscreen" style={styles.container}>
          <h1 style={styles.icon}>{'👯'}</h1>
          <form style={styles.form}>
            <List wrap>
              <Input type="text" ref="username" placeholder="Username" />
              <Input type="password" ref="password" placeholder="Password"/>
            </List>
            <br/>
            <List>
              <List.Item icon={true} title="Login" onClick={this.login.bind(this)} />
            </List>
          </form>
        </div>
      </View>
    );
  }

  login() {
    const status = alt.stores.UsersStore.getStatus();
    if (status === 'logging') { return; }
    console.log('logginin');
    const username = this.refs.username.getDOMNode().value;
    const password = this.refs.password.getDOMNode().value;
    UsersActions.login({username, password});
  }

  onChange() {
    const currentUser = alt.stores.UsersStore.getCurrentUser();
    if (currentUser.size !== 0) {
      console.log('user logged');
      this.router().transitionTo('home');
    }
  }
}


export default Login;
