import { Reapp, NestedViewList, View, Button } from 'reapp-kit';

class App extends React.Component {

  componentWillMount() {
    // this.router().transitionTo('login');
  }

  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="locka_mobile">
          <p>Hello, World!</p>

          <Button onTap={() => this.router().transitionTo('login')}>
            Go to Login
          </Button>
        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(App);
