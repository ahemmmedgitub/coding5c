// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    secondName: false,
  }

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onSecondName = () => {
    this.setState(prevState => ({secondName: !prevState.secondName}))
  }

  render() {
    const {firstName} = this.state
    const {secondName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="first-container">
            <button
              type="button"
              className="btn-button"
              onClick={this.onFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName ? <div className="special-container">Jon</div> : ''}
          </div>
          <div className="second-container">
            <button
              type="button"
              className="btn-button second"
              onClick={this.onSecondName}
            >
              Show/Hide Lastname
            </button>
            {secondName ? <p className="special-container">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
