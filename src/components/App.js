import React from "react";
import openweather from "../api/openweather";
import WeatherCard from "./WeatherCard";
import Search from "./Search";
class App extends React.Component {
  state = { weatherData: null };
  componentDidMount(){
    this.onSearch('mecca')
  }
  onSearch = async term => {
    const response = await openweather.get("/data/2.5/weather", {
      params: {
        q: term,
        appid: "e2e89470ceaffbb1c32ad751a780042f",
        units: "metric"
      }
    });
    this.setState({ weatherData: response.data });
  };
  
  render() {
   
    return (
      <div className="container">
        <Search onTermSubmit={this.onSearch} />
        <div className="d-flex mt-3 justify-content-center">
        <WeatherCard weatherData={this.state.weatherData} />
      </div>
      </div>
    );
  }
}

export default App;
