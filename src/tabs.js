import React, { Component } from 'react';
import './tabs.css';
import Zero from './zero';
import One from './One';
import Two from './Two';

export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    changeActiveTab(num) {
        this.setState({
            active: num
        })
    }

    render() {
        let component;
        if (this.state.active === 0) {
            component = <Zero />
        } else if (this.state.active === 1) {
            component = <One />
        } else {
            component = <Two />
        }
        return (
            <div>
                <ul>
                    <li className={this.state.active === 0 ? 'active' : null} onClick={() => this.changeActiveTab(0)}><a href="#">Zero</a></li>
                    <li className={this.state.active === 1 ? 'active' : null} onClick={() => this.changeActiveTab(1)}><a href="#">One</a></li>
                    <li className={this.state.active === 2 ? 'active' : null} onClick={() => this.changeActiveTab(2)}><a href="#">Two</a></li>
                </ul>
                {component}
            </div>
        )
    }
}
