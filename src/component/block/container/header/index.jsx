import React from 'react'
import styles from './style.scss'

const Container__Header = (props) => {

  return (
    <div className={styles.container__header}>
      {props.children}
    </div>
  )

}

export default Container__Header
