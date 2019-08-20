import React, { Component } from 'react'

export default class Dropdown extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.closeLightboxOpenModal = this.closeLightboxOpenModal.bind(this);

        this.state = {
            popupVisible: false,
            openModal: false
        };
    }

    handleClick() {
        if (!this.state.popupVisible) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    }

    closeLightboxOpenModal() {
        this.setState({
            popupVisible: false,
            openModal: !this.state.openModal
        })
    }

    render() {
        let firstLightbox;
        if (this.state.popupVisible) {
            firstLightbox = (
                <div className="popover" style={{ background: "purple", padding: "5rem" }}>
                    <p onClick={this.closeLightboxOpenModal} style={{ background: "lightgray" }}>I'm a popover</p>
                </div>
            )
        }else{
            firstLightbox =null;
        }

        return (
            <div className="popover-container" ref={node => { this.node = node; }}>
                <button onClick={this.handleClick}>Toggle Popover</button>
                {firstLightbox}
                {
                    this.state.openModal && (
                        <div style={{ border: "1px solid black", padding: "4rem", background: "lightpink" }}>I'm a modal</div>
                    )
                }
            </div>
        );
    }
}