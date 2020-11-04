import React from 'react'
import { NavLink as RNavLink } from 'react-router-dom';
import {
  NavItem, Nav, NavLink, 
} from "reactstrap"


const Menu = () => {
  return (
    <>
          <Nav tabs size='sm' >
            <NavItem >
              <NavLink exact to="/" activeClassName="activenave" tag={RNavLink} >خانه</NavLink>
            </NavItem>
            <NavItem >
              <NavLink to="/dashboard" activeClassName="activenave" tag={RNavLink} >پروفایل</NavLink>
            </NavItem>
            <NavItem >
              <NavLink exact to="/products" activeClassName="activenave" tag={RNavLink}>محصولات</NavLink>
            </NavItem>
            <NavItem >
              <NavLink to="/contact" activeClassName="activenave" tag={RNavLink} >تماس با ما</NavLink>
            </NavItem>
          </Nav>
    </>
  )
}

export default Menu;
