import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    OddOrEven: 'Even',
  }

  increment = () => {
    const {count} = this.state
    const increment = Math.floor(Math.random() * 101)
    const newCount = count + increment

    this.setState({
      count: newCount,
      OddOrEven: newCount % 2 === 0 ? 'Even' : 'Odd',
    })
  }

  render() {
    const {count, OddOrEven} = this.state
    return (
      <div className="bg-container">
        <h1>Count {count}</h1>
        <p>count is {OddOrEven}</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
