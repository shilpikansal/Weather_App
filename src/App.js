import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form.js'
import Title from './Title.js'
import Components from './Components.js'
const API_KEY="35a1afd75d91ddc645e10bc4cfed4020"

class App extends React.Component
{
	constructor()
	{
		super()
		this.state={weather:
			{Description:'',
			Temperature:'',
			Wind:'',
			Humidity:'',
			Visibility:'',
	  	Error:''}
		}
		this.getWeather=this.getWeather.bind(this)
	}
	async getWeather(e)
	{
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country =e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		if(api_call.status===404)
		{
				this.setState({weather:{
				Description:'',
				Temperature:'',
				Wind:'',
				Humidity:'',
				Visibility:'',
				Error:"Please enter valid city name and country name"}})
		}
		else
		{
			const weather_data = await api_call.json();
			if( city && country)
			{
				this.setState({weather:{
					Description:weather_data.weather[0].description,
					Temperature:weather_data.main.temp,
					Wind:weather_data.wind.speed,
					Humidity:weather_data.main.humidity,
					Visibility:weather_data.sys.visibility,
				  Error:''}
				})
			}
			else {
				this.setState={weather:
					{Description:'',
					Temperature:'',
					Wind:'',
					Humidity:'',
					Visibility:'',
				  Error:''}}
				}

				console.log(weather_data)
			}
		}
		render()
		{
			return(
				<div>
				<Title />
				<Form getWeather={this.getWeather}/>
				<Components
				Description={this.state.weather.Description}
				Temperature={this.state.weather.Temperature}
				Wind={this.state.weather.Wind}
				Humidity={this.state.weather.Humidity}
				Visibility={this.state.weather.Visibility}
				Error={this.state.weather.Error}/>
				</div>
			)
		}
	}

	export default App
