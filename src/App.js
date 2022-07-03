import {Component} from 'react'

import Tab from './components/Tab'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  changeTab = id => {
    this.setState({activeTab: id})
  }

  filtered = () => {
    const {activeTab} = this.state
    const result = languageGreetingsList.find(k => k.id === activeTab)

    return result
  }

  render() {
    const {activeTab} = this.state
    const {imageUrl, imageAltText} = this.filtered()

    return (
      <div className="main-con">
        <h1>Multilingual Greetings</h1>
        <ul className="tab-con">
          {languageGreetingsList.map(each => (
            <Tab
              details={each}
              key={each.id}
              isMatch={activeTab === each.id}
              changeTab={this.changeTab}
            />
          ))}
        </ul>
        <img src={imageUrl} className="ima" alt={imageAltText} />
      </div>
    )
  }
}

export default App
