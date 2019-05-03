import React from 'react'
import styles from './style.scss'

const Typography__Sub_Heading = (props) => (
    <h3 className={styles.typography__sub_heading}>
      {props.text}{props.children}
    </h3>
)

export default Typography__Sub_Heading
