

// For this coding challenge, I've decided to store the app's data in this global object.
// Normally this information would be retrieved from the server and held a Flux store
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

    contentBlocks: [
      {
        header: 'Industries',
        collection: ['Database Software', 'Big Data', 'SaaS'],
        isLead: false
      },
      {
        header: 'Notable Investors',
        collection: ['137 Ventures', 'ARTIS Ventures', 'Benjamin Ling'],
        isLead: false
      },
      {
        header: 'Valuation',
        collection: ['$19.65B'],
        isLead: true
      },
      {
        header: 'Total Funding',
        collection: ['$200M'],
        isLead: true
      },
      {
        header: 'Year Funded',
        collection: ['2004'],
        isLead: true
      }
    ],

    industries: ['Database Software', 'Big Data', 'SaaS'],
    notableInvestors: ['137 Ventures', 'ARTIS Ventures', 'Benjamin Ling'],
    valuation: '$19.65B',
    totalFunding: '$200M',
    yearFounded: '2004'
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

  palantirLists: {
    header: 'LISTS',
    contentBlocks: [
      {
        header: 'People',
        collection: ['Alexander Karp Ph.D', 'Joe Lonsdale', 'Stephen Cohen', 'Geoff Belknap Ph.D', 'Y.Dan Rubinstein Ph.D']
      },
      {
        header: 'Investors',
        collection: ['Aeon Funds', 'Dover Madison Capital Management', 'Nima Capital', 'GSV Ventures', 'MicroVenture Marketplace']
      },
      {
        header: 'Acquisitions',
        collection: ['FT Technologies', 'Propeller', 'Poptip', 'ARTIS Ventures', 'Voicegem']
      }
    ]
  },

  palantirFundingHistory: {
    header: 'FUNDING HISTORY',
    tableHeaders: ['Title', 'Series', 'Funding', 'Announced On'],
    tableBlocks: [
      ['Later Stage VC', 'K', '$554.83M', '23-Jul-2015'],
      ['Later Stage VC', 'J', '$400.00M', '26-Nov-2014'],
      ['Later Stage VC', 'I', '$635.71M', '03-Nov-2014'],
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
  },

  footer: {
    image: 'assets/market-x-large.png',
    copyrightText: '© 2015 MarketX Inc. All Rights Reserved.',
    fineprint: 'This site is operated by MarketX Inc. MarketX does not give investment, legal or tax advice. All securities listed herein are offered through North Capital Private Securities Corporation ("NCPS"), a registered broker-dealer, member FINRA/SIPC. MarketX has taken no steps to verify the adequacy, accuracy, or completeness of any information presented herein. By accessing this site and any pages thereof, you agree to be bound by the Terms of Use and Privacy Policy. Only Accredited Investors can invest in securities offerings posted on this website. All accredited investors using the MarketX platform must be verified as to their accredited status and must acknowledge and accept the high risks associated with investing in privately held companies and early-stage ventures. These risks include holding an investment for periods of many months or years with limited ability to resell, and the risk of losing your entire investment. You must have the ability to bear those risks. To the fullest extent permissible by law, neither MarketX nor any of its directors, officers, employees, representatives, affiliates or agents shall have any liability whatsoever arising out of any error or incompleteness of fact or opinion in the presentation or publication of the materials and communication herein.'
  }

};
