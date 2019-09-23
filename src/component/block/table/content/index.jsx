import React from 'react'
import styles from './style.scss'

const Table__Content = (props) => (

  <table className={styles.table__content}>
    {props.children}
  </table>

)

export default Table__Content
