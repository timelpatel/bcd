import React from 'react'
import styles from './style.scss'

const Typography__Code = (props) => (
  <p className={styles.typography__code}>
    {props.text}{props.children}
  </p>
)

export default Typography__Code
