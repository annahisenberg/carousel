import React, { Component } from 'react';
import './carousel.css';
import FirstSection from './firstSection';
import SecondSection from './secondSection';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstComponent: false,
            secondComponent: true,
            index: 1
        }
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }   

    handleLeftClick() {
        console.log('left')
        this.setState({
            index: this.state.index - 1
        })
    }

    handleRightClick() {
        console.log('right');
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        let component;
        if (this.state.index === 1) {
            component = <FirstSection />
        } else {
            component = <SecondSection />
        }

        return (
            <section>
                <div>
                    <span className="dashes"></span>
                    <span className="dashes"></span>
                    <span className="dashes"></span>
                </div>
                <div className="arrows">
                    <span onClick={this.handleLeftClick}>left</span>
                    <span onClick={this.handleRightClick}>right</span>
                </div>
                {component}
            </section>
        )
    }
}
