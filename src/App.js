import React, { Component } from 'react';
import './App.css';
import {
    BribingLines,
    FloydTriangle,
    HourGlass,
    JumpingOnClouds,
    NumbersTriangle,
    RepeatedString
} from './components/Puzzles'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Puzzles</h1>
                <BribingLines/>
                <HourGlass/>
                <RepeatedString/>
                <JumpingOnClouds/>
                <NumbersTriangle/>
                <FloydTriangle/>
            </div>
        );
    }
}

export default App;
