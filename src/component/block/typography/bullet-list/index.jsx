import React from 'react'
import styles from './style'

const Typography__Bullet_list = (props) => (
  <ul className={styles.list__bullet}>
    {
      props.listItems.map(list => (
        <li key={list.id}>
          {list.text}
        </li>
      ))
    }
  </ul>
)

export default Typography__Bullet_list
