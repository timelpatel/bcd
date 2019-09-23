import React from 'react'
import styles from './style.scss'

const Button__Tertiary_External = (props) => (

  <a
    className={`${styles.button__tertiary}`}
    href={props.href}
    target='_blank'
  >
    <span>
      {props.text}
    </span>
  </a>

)

export default Button__Tertiary_External
