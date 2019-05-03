import React from 'react'
import styles from './style.scss'

const Container__Section = (props) => {

  return (
    <div className={styles.container__section}>
      {props.children}
    </div>
  )

}

export default Container__Section
