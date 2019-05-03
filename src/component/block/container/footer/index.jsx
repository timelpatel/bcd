import React from 'react'
import styles from './style'

const Container__Footer = (props) => {

  return (
    <footer
      className={styles.container__footer}
    >
      {props.children}
    </footer>
  )

}

export default Container__Footer
