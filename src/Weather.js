import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: {},
    };
  }

  componentWillMount() {
    const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.props.city}%2C%20${this.props.state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
    fetch(url).then(response => response.json().then(json => {
      this.setState({ apiResponse: json.query.results });
    }));
  }

  render() {
    const { channel } = this.state.apiResponse;

    if (channel) {
      const { condition } = channel.item;
      return (
        <div>
          Currently {condition.temp}°{channel.units.temperature} and {condition.text}
        </div>
      );
    } else {
      return (
        <div>Loading</div>
      );
    }
  }
}

export default Weather;
