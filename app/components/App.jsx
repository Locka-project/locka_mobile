import { Reapp } from 'reapp-kit';
import Theme from 'reapp-ui/helpers/Theme';
import iOSTheme from 'reapp-ui/themes/ios/theme';

class App extends React.Component {

  render() {
    return (
      <Theme {...iOSTheme}>
        {this.props.child()}
      </Theme>
    );
  }

}

export default Reapp(App);
