import { Reapp, View, Button, List, Input } from 'reapp-kit';

class Login extends React.Component {
  render() {
    return (
      <View>
        <form>
          <p>Login</p>
          <List wrap>
            <Input type="text" placeholder="Username" />
            <Input type="text" placeholder="Password"/>
          </List>
          <br/>
          <Button onTap={this.login.bind(this)}>
            Login
          </Button>
        </form>
      </View>
    );
  }

  login() {
    this.router().transitionTo('home');
  }
}

export default Reapp(Login);
