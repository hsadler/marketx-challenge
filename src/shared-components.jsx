

var Navigation = React.createClass({

  getDefaultProps: function() {
    return {
      // passed in as attr
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
              <a className="navbar-brand" href="https://www.themarketx.com/">
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
      var href = 'http://' + this.props.text;
      text = <a className="content-block-text content-block-link" href={href}>{this.props.text}</a>
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


var CircleNav = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img className="center-block" src="assets/threeCircles.png" />
        </div>
      </div>
    );
  }

});


var PalantirMainContent = React.createClass({

  getDefaultProps: function() {
    // From the data store. This information would normally be either requested from the server,
    // and held in the component state property, or it would be retrieved from a Flux store or similar.
    // Any asycronous retrievals have to be held in state where the initial state is replaced by the
    // data once it arrives.
    return appData.palantirMain;
  },

  render: function() {

    var dataLists = this.props.contentBlocks.map(function(item, i) {

      var innerLists = item.collection.map(function(listItem, j) {
        var itemClassName = 'data-list-item col-md-12' + (item.isLead ? ' lead content-block-lead data-lead-text' : '');
        return (
          <div key={j} className={itemClassName}>
            <span>{listItem}</span>
          </div>
        );
      });

      var blockClassName = 'data-list-block text-center col-md-' + ((i + 1) % 12 < 3 ? 3 : 2);
      return (
        <div key={i} className={blockClassName}>
          <div className="row">
            <div className="data-list-header col-md-12">
              <span>{item.header}</span>
            </div>
            {innerLists}
          </div>
        </div>
      );
    });


    return (
      <div>

        <div className="row">
          <div className="planatir-main-big-x col-md-1 col-md-offset-11 col-sm-2 col-sm-offset-10 col-xs-3 col-xs-offset-9">
            <a href="https://www.themarketx.com/">
              <img className="big-x-image" src="assets/bigX.png" />
            </a>
          </div>
        </div>

        <div className="palantir-main-stack1 row">
          <div className="col-md-5 col-md-offset-1 col-sm-8 col-sm-offset-2 col-xs-12">
            <img className="center-block" src={this.props.image} />
          </div>

          <div className="col-md-5 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12">
            <p className="blurb">{this.props.blurb}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-md-offset-0 col-sm-8 col-sm-offset-2">
            {dataLists}
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


var ListContent = React.createClass({

  getDefaultProps: function() {
    // from data store
    return appData.palantirLists;
  },

  render: function() {

    var dataLists = this.props.contentBlocks.map(function(item, i) {

      var innerLists = item.collection.map(function(listItem, j) {
        return (
          <div key={j} className="data-list-item col-md-12">
            <span className="data-list-item-left">{listItem}</span>
          </div>
        );
      });

      return (
        <div key={i} className="data-list-block col-md-4">
          <div className="row">
            <div className="data-list-header col-md-12">
              <span className="data-list-header-left">{item.header}</span>
            </div>
            {innerLists}
          </div>
        </div>
      );
    });

    return (
      <div className="list-content-container">

        <ContentGroupHeader text={this.props.header} />

        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-2">

            <div className="text-left row">
              {dataLists}
            </div>

          </div>
        </div>

        <CircleNav />

      </div>
    );
  }

});


var FundingHistoryContent = React.createClass({

  getDefaultProps: function() {
    // from data store
    return appData.palantirFundingHistory;
  },

  render: function() {

    var headerList = this.props.tableHeaders.map(function(item, i) {
      var style = i === 0 ? {width: '175px'} : null;
      return (
        <th key={i}>
          <div  style={style}>
            <span className="table-header-text">{item}</span>
          </div>
        </th>
      );
    });

    var tableList = this.props.tableBlocks.map(function(row, i) {

      var rowList = row.map(function(listItem, j, coll) {
        var style = j === 0 ? {textDecoration: 'underline'} : null;
        var tdClass = ((i % 2) === 0 ? ' table-data-stripe' : '');
        if(i < 2 && j === coll.length - 1) {
          return (
            <td key={j} style={style} className={tdClass}>
              <span className="table-data-text">{listItem}</span>
              <div className="col-md-2 col-md-offset-10 col-sm-2 col-sm-offset-10 col-xs-2 col-xs-offset-10">
                <img className="table-up-arrow" src="assets/up_arrow.png" />
              </div>
            </td>
          );
        } else {
          return (
            <td key={j} style={style} className={tdClass}>
              <span className="table-data-text">{listItem}</span>
            </td>
          );
        }

      });

      return (
        <tr key={i}>
          {rowList}
        </tr>
      );
    });

    return (
      <div className="list-content-container">

        <ContentGroupHeader text={this.props.header} />

        <table className="table">
          <tbody>
            <tr>
              {headerList}
            </tr>
            {tableList}
          </tbody>
        </table>
        <CircleNav />

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
        <CircleNav />
      </div>
    );
  }

});


var Footer = React.createClass({

  getDefaultProps: function() {
    // passed in as attr
    return {
      footerData: {
        image: null,
        copyrightText: null,
        fineprint: null
      }
    };
  },

  render: function() {
    return (
      <div>
        <footer className="footer col-md-12 col-sm-12 col-xs-12">
          <div className="footer-content col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">

            <div className="text-center">
              <img src={this.props.footerData.image} />
              <p className="footer-text">
                {this.props.footerData.copyrightText}
              </p>
            </div>
            <div>
              <p className="footer-text footer-text-sm">
                {this.props.footerData.fineprint}
              </p>
            </div>

          </div>
        </footer>
      </div>
    );
  }

});
















