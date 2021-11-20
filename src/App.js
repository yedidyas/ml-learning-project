import logo from './logo.svg';
import './App.css';
import * as tf from "@tensorflow/tfjs";
import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: 'Jordan Belfort',
            backend: 'undefined'
        }
    }

    async componentDidMount() {
        await tf.ready();
        this.setState({backend: tf.getBackend()});

        return Promise.resolve();
    }

    render() {
        return(
            <div>
                {this.state.backend}
            </div>
        )
    }
}


export default App;
