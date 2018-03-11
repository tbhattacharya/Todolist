import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWeather } from './actions/actions';

export class Weather extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.handleWeather = this.handleWeather.bind(this);
    }

    handleWeather() {
        this.props.handleWeather('37.8267', '-122.4233');
    }

    render() {
        return (
            <div>
                <label> {this.props.summary}</label>
                <button onClick={this.handleWeather}>Get Weather</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleWeather: (lat, long) => dispatch(fetchWeather(lat, long))
    };
}

const mapStateToProps = state => {
    console.log('The state ', state);
    return {
        summary: state.showWeather.summary
    }
}

export const WeatherComp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather);