

var Navigation = React.createClass({

  getDefaultProps: function() {
    return {
      navData: []
    };
  },

  render: function() {

    var navList = this.props.navData.map(function(navItem, i) {
      var specialClass = navItem.isSpecial ? 'nav-highlight' : '';
      return (
        <li key={i}>
          <a href={navItem.url}
            className={specialClass}>
            {navItem.text}
          </a>
        </li>
      );
    });

    return (
      <div>

        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">

            <div className="navbar-header">
              <button type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#main-navbar-collapse"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#/">
                <img className="navbar-brand-img" alt="Brand" src="assets/market-x-small.png" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="main-navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                {navList}
              </ul>
            </div>

          </div>
        </nav>

      </div>
    );
  }

});


var ContentGroupHeader = React.createClass({

  getDefaultProps: function() {
    return {
      text: null
    };
  },

  render: function() {
    var text = this.props.text ? this.props.text : 'HEADER';
    return (
      <div>
        <h1 className="content-group-header lead">{text}</h1>
        <hr />
      </div>
    );
  }

});


var ContentBlock = React.createClass({

  getDefaultProps: function() {
    return {
      header: 'header',
      lead: null,
      text: 'text',
      textIsLink: false
    };
  },

  render: function() {
    var lead = this.props.lead ? <p className="lead content-block-lead">{this.props.lead}</p> : null
    var text;

    if(this.props.textIsLink) {
      text = <a className="content-block-text content-block-link" href={this.props.text}>{this.props.text}</a>
    } else {
      text = <p className="content-block-text">{this.props.text}</p>
    }

    return (
      <div>
        <h1 className="content-block-header">{this.props.header}</h1>
        {lead}
        {text}
      </div>
    );
  }

});


var ButtonLarge = React.createClass({

  getDefaultProps: function() {
    return {
      text: 'BUTTON',
      url: '#',
      backgroundColor: '#93BBD1'
    };
  },

  render: function() {
    var style = {
      backgroundColor: this.props.backgroundColor
    };
    return (
      <div>
        <a className="info-button btn btn-lg" href={this.props.url} style={style}>
          {this.props.text}
        </a>
      </div>
    );
  }

});


var ButtonGroup = React.createClass({

  render: function() {
    return (
      <div className="button-group-container">
        <div className="row">

          <div className="text-center col-md-4 col-md-offset-2 col-sm-12">
            <ButtonLarge
              text="I'M INTERESTED"
              url="#"
              backgroundColor="#523258" />
          </div>

          <div className="text-center col-md-4 col-sm-12">
            <ButtonLarge
              text="ASK A QUESTION"
              url="#"
              backgroundColor="#93BBD1" />
          </div>

        </div>
      </div>
    );
  }

});


var PalantirMainContent = React.createClass({

  getDefaultProps: function() {
    // from data store
    return appData.palantirMain;
  },

  render: function() {

    var blocksList = this.props.industries.map(function(item, i) {
      console.log(item);
    });

    return (
      <div>

        <div className="row">
          <div className="planatir-main-big-x col-md-1 col-md-offset-11 col-sm-2 col-sm-offset-10 col-xs-3 col-xs-offset-9">
            <img className="big-x-image" src="assets/bigX.png" />
          </div>
        </div>

        <div className="row">

          <div className="col-md-5 col-md-offset-1 col-sm-12 col-xs-12">
            <img src={this.props.image} />
          </div>

          <div className="col-md-5 col-sm-12 col-xs-12">
            <p className="blurb">{this.props.blurb}</p>
          </div>

        </div>
      </div>
    );
  }

});


var AboutContent = React.createClass({

  getDefaultProps: function() {
    // from data store
    return appData.palantirAbout;
  },

  render: function() {

    var blocksList = this.props.contentBlocks.map(function(blockItem, i) {
      return (
        <div className="content-block-container col-md-4 col-sm-4 col-xs-4" key={i}>
          <ContentBlock
            header={blockItem.header}
            lead={blockItem.lead}
            text={blockItem.text}
            textIsLink={blockItem.textIsLink} />
        </div>
      );
    });

    return (
      <div className="about-content-container">
        <ContentGroupHeader text={this.props.header} />
        <div className="row">

          <div className="col-md-5 col-sm-12">
            <p className="blurb">{this.props.blurb}</p>
          </div>

          <div className="col-md-6 col-md-offset-1 col-sm-12">
            {blocksList}
          </div>

        </div>
      </div>
    );
  }

});


var RecentPressContent = React.createClass({

  getDefaultProps: function() {
    // from data store
    return appData.palantirRecentPress;
  },

  render: function() {

    var blocksList = this.props.contentBlocks.map(function(blockItem, i) {
      return (
        <div className="recent-press-block-item" key={i}>
          <div className="content-block-container col-md-4 col-sm-4 col-xs-12">
            <ContentBlock
              header={blockItem.header}
              lead={blockItem.lead}
              text={blockItem.text}
              textIsLink={blockItem.textIsLink} />
          </div>
          <div className="content-block-container col-md-8 col-sm-8 col-xs-12">
            <p className="blurb">
              {blockItem.blurb}
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <ContentGroupHeader text={this.props.header} />
        <div className="row">
          {blocksList}
        </div>
      </div>
    );
  }

});
















