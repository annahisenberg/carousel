import React, { Component } from 'react';
import './firstSection.css'

export default class FirstSection extends Component {
    render() {
        return (
            <div>
                <div className="flex-container">
                    <div className="flex-item first-box">
                        <h2>Quick Starts</h2>
                        <p>Access to your most used tools</p>
                        <hr/>
                        <ul>
                            <li><a href="#">Shortcut Link 1</a></li>
                            <li>Shortcut Link 2</li>
                            <li>Shortcut Link 3</li>
                        </ul>
                    </div>
                    <div className="box flex-item">
                        <h2>Create New Report</h2>
                        <hr/>
                        <p>Access to your most used tools</p>
                    </div>
                    <div className="box flex-item">
                        <h2>Create New Report</h2>
                        <hr/>
                        <p>Access to your most used tools</p>
                    </div>
                    <div className="box flex-item">
                        <h2>Create New Report</h2>
                        <hr/>
                        <p>Access to your most used tools</p>
                    </div>
                </div>
            </div>
        )
    }
}
