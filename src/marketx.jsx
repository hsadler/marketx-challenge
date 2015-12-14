

var App = React.createClass({

  getDefaultProps: function() {
    return {
      navData: appData.nav,
      footerData: appData.footer
    };
  },

  render: function() {
    return (
      <div>
        <Navigation navData={this.props.navData}/>
        <div className="app-container col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          <PalantirMainContent />
          <ButtonGroup />
          <AboutContent />
          <ListContent />
          <FundingHistoryContent />
          <RecentPressContent />
          <ButtonGroup />
        </div>
        <Footer footerData={this.props.footerData} />
      </div>
    );
  }
});


ReactDOM.render(
  <App />, document.getElementById('marketx-app')
);


















