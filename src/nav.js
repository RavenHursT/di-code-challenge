import {Link} from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import React from 'react'
import './nav.scss'

export default props => <Navbar color="light" light expand="md">
  <NavbarBrand {...{tag: 'span'}}><Link to="/">Behance Navigator</Link></NavbarBrand>
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink {...{
        href: `https://github.com/RavenHursT/di-code-challenge`,
        target: `_blank`
      }}>GitHub</NavLink>
    </NavItem>
  </Nav>
</Navbar>