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

    handleClick(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        if (!this.state.popupVisible || !this.state.openModal) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } 
        
        if (this.state.openModal) {
            return this.setState({ openModal: !this.state.openModal });
        }

        this.setState({ popupVisible: !this.state.popupVisible });
    }

    handleOutsideClick(e) {
        e.stopPropagation();

        if (e.target.id.indexOf("popover") >= 0 || e.target.id.indexOf("button") >= 0) {
            return
        }

        document.removeEventListener('click', this.handleOutsideClick, false);

        if (this.state.openModal) {
            return this.setState({ openModal: !this.state.openModal });
        }

        this.setState({ popupVisible: !this.state.popupVisible });
    }

    closeLightboxOpenModal(e) {
        e.stopPropagation();
        this.setState({
            popupVisible: false,
            openModal: !this.state.openModal
        })
    }

    render() {
        let firstLightbox;
        if (this.state.popupVisible) {
            firstLightbox = (
                <div className="popover" id="popover" onClick={(e)=>e.stopPropagation()} style={{ background: "purple", padding: "5rem" }}>
                    <p onClick={this.closeLightboxOpenModal} id="button" style={{ background: "lightgray" }}>I'm a popover</p>
                </div>
            )
        } else {
            firstLightbox = null;
        }

        return (
            <div className="popover-container">
                <button onClick={this.handleClick}>Toggle Popover</button>
                {firstLightbox}
                {
                    this.state.openModal && (
                        <div id="popover"   style={{ border: "1px solid black", padding: "4rem", background: "lightpink" }}>I'm a modal</div>
                    )
                }
            </div>
        );
    }
}