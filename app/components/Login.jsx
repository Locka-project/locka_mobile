import { Reapp, View, List, Input } from 'reapp-kit';

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
  render() {
    return (
      <View>
        <div className="fullscreen" style={styles.container}>
          <h1 style={styles.icon}>👯</h1>
          <form style={styles.form}>
            <List wrap>
              <Input type="text" placeholder="Username" />
              <Input type="text" placeholder="Password"/>
            </List>
            <br/>
            <List>
              <List.Item icon={true} title="Login" onTap={this.login.bind(this)} />
            </List>
          </form>
        </div>
      </View>
    );
  }

  login() {
    this.router().transitionTo('home');
  }
}


export default Reapp(Login);
