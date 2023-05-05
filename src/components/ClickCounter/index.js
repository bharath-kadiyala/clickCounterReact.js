import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-main-container">
        <h1 className="title">
          The Button has been clicked <span className="span-sty">{count}</span>
          times
        </h1>
        <p className="pera">Click the button to increase the count!</p>
        <div>
          <button className="btn-sty" type="button" onClick={this.onIncrement}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
