import React from 'react'
import styles from './style'

const Typography__Body_Copy = (props) => (
  <p className={styles.typography__body_copy}>
    {props.text}{props.children}
  </p>
)

export default Typography__Body_Copy
