import React from 'react'
import ReactDom from 'react-dom'

class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.getWeather}>
      <input type="text" id="city" placeholder="Enter city" />
      <input type="text" id="country" placeholder="Enter country" />
      <button> Enter </button>
      </form>
    )
  }
}

export default Form
