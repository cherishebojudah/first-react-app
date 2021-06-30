import React, { Component } from 'react';
import Header from './Components/Header';
import ClassComp from './Components/ClassComp';
import FuncComp from './Components/FuncComp';
 
class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <button>HEY, CLICK HERE</button>
                <Header/>
                <ClassComp/>
                <FuncComp/>
            </div>
        );
    }
}

export default App;