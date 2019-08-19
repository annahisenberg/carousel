import React, { Component } from 'react'

export default class Dropdown extends Component {
    constructor() {
      super();
  
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
      this.closeLightbox = this.closeLightbox.bind(this);
  
      this.state = {
        popupVisible: false
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

    closeLightbox() {
        this.setState({
            popupVisible: false
        })
    }
  
    render() {
      return (
        <div className="popover-container" ref={node => { this.node = node; }}>
          <button
            onClick={this.handleClick}
          >
            Toggle Popover
          </button>
          {this.state.popupVisible && (
            <div
              className="popover"
              style={{background: "purple", padding: "5rem"}}
            >
              <p onClick={this.closeLightbox} style={{background: "lightgray"}}>I'm a popover</p>
            </div>
           )}
        </div>
      );
    }
  }