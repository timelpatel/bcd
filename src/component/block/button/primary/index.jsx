import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.scss'

const Button__Primary = (props) => (

  <NavLink
    className={styles.button__primary}
    to={props.href}>
      <span>
        {props.text}
      </span>
  </NavLink>

)

export default Button__Primary
