import React, { Component } from 'react';

class ClassComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    UpdateCount=()=>{
        this.setState({count: this.state.count + 1})
    }

    render () {
        const { count } =  this.state;

        return (
            <div>
                <p>This paragraph is from the class componenet and the button has been clicked {count} times</p>
                <button className='button' onClick = {this.UpdateCount}>Clicked {count} times</button>
            </div>)
    }
}

export default ClassComp