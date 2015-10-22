import { View, BackButton } from 'reapp-kit';

class Home extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <View {...this.props} title="Sub Route" titleLeft={backButton}>
        <p>Hello, from the sub route!</p>
        <p>You can drag from the left side of the screen to drag this view back out</p>
        <p>Ready to deploy? Run <code>reapp build</code> and check your build directory</p>
      </View>
    );
  }
}

export default Home;
