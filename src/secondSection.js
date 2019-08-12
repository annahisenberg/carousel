import React, { Component } from 'react';
import './secondSection.css'

export default class SecondSection extends Component {
    render() {
        return (
            <div>
                <div className="flex-container">
                    <div className="flex-item first-box">
                        <h2>Second Section</h2>
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
