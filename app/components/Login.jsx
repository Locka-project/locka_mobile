import { View, List, Input } from 'reapp-kit';
import UsersStore from '../stores/UsersStore';
import UsersActions from '../actions/UsersActions';

const styles = {
  container: {
    background: '-webkit-linear-gradient(90deg, #136a8a 10%, #267871  90%)',
    overflow: 'hidden',
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
    const status = alt.stores.UsersStore.getStatus();
    return (
      <View>
        <div className="fullscreen" style={styles.container} >
          <h1 style={styles.icon}>{'👯'}</h1>
          <p>{status}</p>
          <form style={styles.form}>
            <List wrap>
              <Input type="text" ref="identifier" placeholder="Username"/>
              <Input type="password" ref="password" placeholder="Password"/>
            </List>
            <br/>
            <List>
              <List.Item icon={true} title="Login" onTap={this.login.bind(this)} onClick={this.login.bind(this)} />
            </List>
          </form>
        </div>
      </View>
    );
  }

  login() {
    console.log('logigin');
    const status = alt.stores.UsersStore.getStatus();
    if (status === 'logging') { return; }
    const identifier = this.refs.identifier.getDOMNode().value;
    const password = this.refs.password.getDOMNode().value;
    UsersActions.login({identifier, password});
  }

  onChange() {
    const currentUser = alt.stores.UsersStore.getCurrentUser();
    if (currentUser) {
      this.router().transitionTo('home');
    } else {
      this.forceUpdate();
    }
  }
}


export default Login;
