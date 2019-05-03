import React from 'react'
import styles from './style.scss'

const Typography__Page_Title = (props) => (
  <h1 className={styles.typography__page_title}>
    {props.text}
  </h1>
)

export default Typography__Page_Title
