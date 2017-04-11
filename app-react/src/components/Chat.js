var Chat = React.createClass({

  getInitialState: function() {
    return {
      username: null
    };
  },

  render() {
    return (
      <div>
        <WelcomeView username={this.state.username} />
      </div>
    );
  }
});



