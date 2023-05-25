// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkmode: true,
  }

  onOffbutton = () => {
    this.setState(prevState => ({isDarkmode: !prevState.isDarkmode}))
  }

  render() {
    const {isDarkmode} = this.state
    const card = isDarkmode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkmode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="app-container">
        <div className={`container ${card}`}>
          <h1 className="heading">Click to change Mode</h1>
          <button className="button" type="button" onClick={this.onOffbutton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
