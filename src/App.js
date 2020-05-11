import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomQuote: "",
      randomAuthor: ""
    }
  }

  async getQuotesForState() {
    this.props.addAuthor("Daria Morgendorffer")
    this.props.addAuthor("Quinn Morgendorffer")
    this.props.addQuotes("Daria Morgendorffer", [
      '"Sometimes your shallowness is so thorough it\'s almost like depth..."',
      '"It never would have worked. I mean, unless I tried or something."',
      '"My goal is not to wake up at forty with the bitter realization that I\'ve wasted my life on a job I hated because I was forced to decide on a career in my teens."',
      '"The whole thing\'s enough to turn your stomach. Which I guess is good if you want to be a model. Eases the transition to bulimia."'
    ])
    this.props.addQuotes("Quinn Morgendorffer", [
      '"And you too can have bouncy hair. If you just take the time to bounce from the inside as well."',
      '"As far as I\'m concerned, the only difference between school and prison is the wardrobe."',
      '"Dressing in black is a fashion statement. It\'s deep, it\'s meaningful, and it\'s slenderizing."',
      '"I want to be a role model for all people, even the ones who need makeup really badly."',
      '"I decided I shouldn\'t wear shoes that kill me because they make my legs look hot."',
      '"I mean, my legs look hot no matter what I wear. They\'d probably even look good in those things you have on."'
    ])
  }

  componentDidMount = () => this.getQuotesForState().then(() => this.newQuote())

  newQuote = () => {
    const { quotes } = this.props
    const authors = Object.keys(quotes)
    const randomAuthorIndex = Math.random() * authors.length | 0
    const randomAuthor = authors[randomAuthorIndex]
    const randomQuoteIndex = Math.random() * quotes[randomAuthor].length | 0
    const randomQuote = quotes[randomAuthor][randomQuoteIndex]

    this.setState({
      ...this.state,
      randomQuote,
      randomAuthor
    })
  }

  render = () => {
    const { randomQuote, randomAuthor } = this.state

    return (
      <div id="quote-box">
        <p id="text">{ randomQuote }<span id="author"> - { randomAuthor }</span></p>
        <button onClick={() => this.newQuote()} id="new-quote">New Quote</button>
        <a href="https://twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a>
      </div>
    );
  }
}

export default App;
