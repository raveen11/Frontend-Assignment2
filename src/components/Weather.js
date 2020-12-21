import React, { Component } from 'react';
import {WeatherAPI} from './WeatherApi';
import WeatherCard from './WeatherCard';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

import Button from '@material-ui/core/Button';
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            weatherData:[]
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({cityName: event.target.value});
      }
    
     
    getWeather=()=>{
        let self=this;
        WeatherAPI.getCurrentWeather(this.state.cityName).then(function (res) {
            console.log(res.data);
            self.setState({
                weatherData:res.data
                })

        }).catch(function (error) {
            console.log(error);
        })
    };
    render() {
        return (
            <div>
                    <TextField
          id="standard-full-width"
          value={this.state.cityName}
           onChange={this.handleChange}
          style={{ margin: 8 }}
          placeholder="Enter the Name of place You wanted To search"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
        variant="contained"
        color="primary"
        onClick={this.getWeather}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
             
                <WeatherCard data={this.state.weatherData}/>
            </div>
        );
    }
}

export default Weather;