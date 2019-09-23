import React from 'react'
import { Link } from 'react-router-dom'
import Container__Header from '../../../../component/block/container/header'
import layout from './layout.scss'
import Typography__Header_Link from '../../../../component/block/typography/header-link'
import Typography__Logo from '../../../../component/block/typography/logo'

const Header_Footer__Header = () => (

  <Container__Header>
    <div className={layout.typography__logo}>
      <Typography__Logo>
        <Link to='/'>BCD</Link>
      </Typography__Logo>
    </div>

    <div className={layout.header__menu}>
      <Typography__Header_Link
        links={
          [
            { id: 1, href: '/assets', text: 'Assets' },
            { id: 2, href: '/behaviours', text: 'Behaviours' },
            { id: 3, href: '/components', text: 'Components' },
          ]
        }
      />
    </div>
  </Container__Header>

)

export default Header_Footer__Header
