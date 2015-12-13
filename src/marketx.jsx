

var App = React.createClass({

  getDefaultProps: function() {
    return {
      navData: appData.nav
    };
  },

  render: function() {
    return (
      <div>
        <Navigation navData={this.props.navData}/>
        <div className="app-container">
          <PalantirMainContent />
          <ButtonGroup />
          <AboutContent />
          <RecentPressContent />
          <ButtonGroup />
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <App />, document.getElementById('marketx-app')
);


















