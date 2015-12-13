

// For this coding challenge, I've decided to store the app's data in this global object
// normally this information would be retrieved from the server and put into a Flux store
// or similar...


var appData = {

  nav: [
    {
      text: 'HOW IT WORKS',
      url: '#'
    },
    {
      text: 'CONTACT',
      url: '#'
    },
    {
      text: 'BLOG',
      url: '#'
    },
    {
      text: 'REQUEST ACCESS',
      url: '#',
      isSpecial: true
    },
    {
      text: 'SIGN IN',
      url: '#'
    }
  ],

  palantirMain: {
    image: 'assets/Palantir.png',
    blurb: 'The company raised $554.83 million of Series K venture funding from undisclosed investors as of October 21, 2015, putting the company’s pre-money valuation at $19.65 billion. Nima Capital and Aeon Funds also participated.',
    industries: [],
    notableInvestors: [],
    valuation: '$19.65B',
    totalFunding: '$200M',
    YearFounded: '2004'
  },

  palantirAbout: {
    header: 'ABOUT',
    blurb: 'Developer of software application for integrating, visualizing and analyzing information. The company builds software platform that help human experts perform collaborative analysis of data at scale. Its software is deployed at public institutions, private enterprises and in the non-profit sector to address the challenges of responsibly making sense of complex and diverse data.',
    contentBlocks: [
      {
        header: 'Business Status',
        lead: null,
        text: 'Generating Revenue',
        textIsLink: false
      },
      {
        header: 'Ownership Status',
        lead: null,
        text: 'Privately Held',
        textIsLink: false
      },
      {
        header: 'Location',
        lead: null,
        text: 'Palo Alto, California',
        textIsLink: false
      },
      {
        header: 'Growth Ratio',
        lead: '0.62%',
        text: '86th %tile',
        textIsLink: false
      },
      {
        header: 'Size Multiple',
        lead: '63.8x',
        text: '96th %tile',
        textIsLink: false
      },
      {
        header: 'Website',
        text: 'www.palantir.com',
        textIsLink: true
      }
    ]
  },

  palantirRecentPress: {
    header: 'RECENT PRESS',
    contentBlocks: [
      {
        header: 'Palantir Adds to Latest Equity Round',
        lead: '23-Oct-2015',
        text: 'Palantir Technologies',
        textIsLink: false,
        blurb: 'Palantir Technologies has added over $100 million to its most recent financing round according to an SEC filing, bringing its total to roughly $555 million. The round values the company at more than $20.2 billion. Palantir’s Big Data analytics tools are designed to integrate, manage and secure any kind of data at a large scale.'
      },
      {
        header: 'Eyeing the Future, Palantir Raises $450M',
        lead: '27-Jul-2015',
        text: 'Palantir Technologies',
        textIsLink: false,
        blurb:'According to an SEC filing, Palantir Technologies has raised $450 million in financing. The company develops Big Data analytics tools designed to integrate, manage and secure any kind of data at a large scale.'
      },
      {
        header: 'Palantir Looking for $20B Valuation',
        lead: '25-Jun-2015',
        text: 'Palantir Technologies',
        textIsLink: false,
        blurb: 'Palantir Technologies is reportedly looking to raise $500 million in funding that will give it a valuation of around $20 billion. The company, which received a $15 billion valuation in its most recent raise in November, is a Big Data startup developing solutions for government agencies, commercial enterprises and non-profit organizations, among other entities.'
      }
    ]
  }

};
