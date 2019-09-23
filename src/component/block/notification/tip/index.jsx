import React from 'react'
import styles from './style.scss'

const Notification__Tip = (props) => (

  <div
    className={styles.notification__tip}
  >
    {props.text}
  </div>

)

export default Notification__Tip
