import React, { Component } from 'react'
import styles from './Button.css';

class Button extends Component {
  render() {
    let btnClass = `${styles.btn}`;
    // if (this.props.mode === "primary") btnClass += ` ${styles.primary}`
    if (this.props.mode) btnClass += ` ${styles[`${this.props.mode}`]}`
    return (
        <button className={btnClass}>{this.props.text}</button>
    )
  }
}

export default Button