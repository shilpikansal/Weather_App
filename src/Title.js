import React from 'react'
import ReactDom from 'react-dom'

class Title extends React.Component
{
  render(){
    return(<div>
      <h3 className="title-container__title"> Weather </h3>
      <h4 className="title-container__subtitle"> It is always better to be prepared.. </h4>
      </div>)
  }
}

export default Title
