import React, { Component } from 'react';
import './PopOutTransition.css';

export default class PopOutTransition extends Component {
    state = {
        clicked: false
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>Click me</button>
                <div id="clicked" className={this.state.clicked ? 'slideIn' : 'slideOut'}>Success</div>
            </div>
        )
    }
}
