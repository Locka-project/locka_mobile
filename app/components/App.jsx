import { Reapp } from 'reapp-kit';

class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.child()}
      </div>
    );
  }

}

export default Reapp(App);
