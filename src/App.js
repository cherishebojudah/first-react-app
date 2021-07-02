import React, { Component } from 'react';
import Header from './Components/Header';
import ClassComp from './Components/ClassComp';
import FuncComp from './Components/FuncComp';
import Hello from './Components/Hello';
import '../src/App.css';
 
class App extends Component {

    render() {
        return (
            <div className='container'>
                <h1>Hello React!</h1>
                <button className='button'>HEY, CLICK HERE</button>
                <Header/>
                <ClassComp/>
                <FuncComp/>
                <Hello/>
            </div>
        );
    }
}

export default App;