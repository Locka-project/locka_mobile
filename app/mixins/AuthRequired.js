import { Reapp } from 'reapp-kit';

export default (ComposedComponent) => {
  return class AuthRequiredComponent extends React.Component {

    static willTransitionTo(transition) {
      console.log('trying to redirect to ' + transition.path);
      if (alt.stores.UsersStore.getCurrentUser().size === 0) {
        console.log('force login');
        transition.redirect('login');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  };
};
