export default (ComposedComponent) => {
  return class AuthRequiredComponent extends React.Component {

    static willTransitionTo(transition) {
      console.log('Transition to ' + transition.path, alt.stores.UsersStore.getCurrentUser());
      if (!alt.stores.UsersStore.getCurrentUser()) {
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
