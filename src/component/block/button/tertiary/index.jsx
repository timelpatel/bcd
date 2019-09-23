import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.scss'

const Button__Tertiary = (props) => (

  <Link
    className={`${styles.button__tertiary}`}
    to={props.href}
  >
    <span>
      {props.text}
    </span>
  </Link>

)

export default Button__Tertiary
