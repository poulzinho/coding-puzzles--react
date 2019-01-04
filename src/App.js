import React, { Component } from 'react';
import './App.css';
import { FloydTriangle, JumpingOnClouds, NumbersTriangle } from './components/Puzzles'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Puzzles</h1>
                <JumpingOnClouds/>
                <NumbersTriangle/>
                <FloydTriangle/>
            </div>
        );
    }
}

export default App;
