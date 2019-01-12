import React from 'react'
import ReactDom from 'react-dom'

class Components extends React.Component
{
  render(){
    return(
      <div>
      {this.props.Description && <p> Description:{this.props.Description} </p>}
      {this.props.Temperature && <p> Temperature:{this.props.Temperature}</p>}
      {this.props.Wind && <p> Wind:{this.props.Wind}</p>}
      {this.props.Humidity &&<p>Humidity:{this.props.Humidity}</p>}
      {this.props.Visibility &&<p>Visibility:{this.props.Visibility}</p>}
      {this.props.Error &&<p>{this.props.Error}</p>}
      </div>
    )
  }
}

export default Components
