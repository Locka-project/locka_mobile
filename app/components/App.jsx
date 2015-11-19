import { Reapp } from 'reapp-kit';

class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div style={{overflow: 'hidden'}} >
          {this.props.child()}
      </div>
    );
  }

}

export default Reapp(App);
