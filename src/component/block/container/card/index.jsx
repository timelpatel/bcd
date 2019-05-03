import React from 'react'
import styles from './style.scss'
import Typography__Subtle_Title from '../../../../component/block/typography/subtle-title/index.jsx'

const Container__Card = (props) => (

  <div className={styles.container__card}>
    <Typography__Subtle_Title
      text={props.title}
    />

    <div
      className={styles.content}
    >
      {props.content}
    </div>
  </div>

)

export default Container__Card
