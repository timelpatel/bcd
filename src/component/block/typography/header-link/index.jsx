import React from 'react'
import { Link } from 'react-router-dom'
import style from './style'

const Typography__Header_Link = (props) => (

  <ul className={style.header__menu}>
    {
      props.links.map(link => (
        <li key={link.id}>
          <Link to={link.href}>
            {link.text}
          </Link>
        </li>
      ))
    }
  </ul>

)

export default Typography__Header_Link
