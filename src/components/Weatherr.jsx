import React, { Component } from "react";

const API_KEY = "<b5b182318e887828004e47a5362ecc52>";

class MyWeatherComponent extends Component {
  state = {
    weatherData: ""
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${b5b182318e887828004e47a5362ecc52}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          weatherData: data
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.weatherData.name}
        {this.state.weatherData.main.temp}
      </div>
    );
  }
}

export default MyWeatherComponent;