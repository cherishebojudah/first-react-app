import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Cherish'
        }
    }

    UpdateName = () => {
        this.setState({name: 'Stranger'})
    }

    render () {
        const {name} = this.state;
        return (
            <div>
                <h3>This is the third component, and it says hello!</h3>
                <p>Hello {name}, come learn react!</p>
                <button className='button' onClick={this.UpdateName}>Click here, {name}</button>
            </div>
        )
    }
}

export default Hello;