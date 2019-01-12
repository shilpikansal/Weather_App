import React from 'react'
import ReactDom from 'react-dom'

class Components extends React.Component
{
  render(){
    return(
      <div>
      {this.props.Description && <p className="weather__key"> Description:
      <span className="weather__value"> {this.props.Description} </span> </p>}
      {this.props.Temperature && <p className="weather__key"> Temperature:
      <span className="weather__value"> {this.props.Temperature}</span> </p>}
      {this.props.Wind && <p className="weather__key"> Wind:
      <span className="weather__value"> {this.props.Wind}</span> </p>}
      {this.props.Humidity &&<p className="weather__key">Humidity:
      <span className="weather__value"> {this.props.Humidity} </span> </p>}
      {this.props.Visibility &&<p className="weather__key">Visibility:
      <span className="weather__value"> {this.props.Visibility} </span></p>}
      {this.props.Error && <p className="weather__error">{this.props.Error}</p>}
      </div>
    )
  }
}

export default Components
