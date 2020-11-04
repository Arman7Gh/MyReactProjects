import React, { useState } from 'react'
import { useHistory, NavLink as RNavLink } from 'react-router-dom';
import {
  Container, Row, Col, Nav,
  NavItem, Collapse, Button, NavLink,
  InputGroup, Input, InputGroupAddon
} from 'reactstrap'

import logo from "../../assets/img/brand/papeli-stor-logo110-pix.png"

export const HeaderMobile = () => {

  const history = useHistory()

  const [togglenav, settogglenav] = useState(true);
  const [togglesearch, settogglesearch] = useState(true);

  const toggleNavbar = () => settogglenav(!togglenav);
  const toggleSearch = () => settogglesearch(!togglesearch);

  return (
    <>
      <div className='headermobile'>
        <Container fluid >
          <Row >
            <Col xs='4' className='rightheaderbtn'>
              <Row >
                <Button outline color='info' onClick={toggleNavbar} className="headerbtn fa fa-bars" />
                <Button outline color='info' onClick={toggleSearch} className="headerbtn fa fa-search" />
              </Row>
              <Collapse isOpen={!togglenav} navbar>
                <Nav className='collaps' vertical tabs size='sm' navbar >
                  <NavItem >
                    <NavLink exact to="/" activeClassName="activenave" tag={RNavLink} >خانه</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to="/dashboard" activeClassName="activenave" tag={RNavLink} >پروفایل</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink exact to="/users" activeClassName="activenave" tag={RNavLink}>حساب کاربری</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink exact to="/products" activeClassName="activenave" tag={RNavLink}>محصولات</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to="/contact" activeClassName="activenave" tag={RNavLink} >تماس با ما</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Col>
            <Col xs='4'>
              <NavLink href="/" active><img id='logo' src={logo} alt="Logo" /></NavLink>
            </Col>
            <Col xs='4' className='leftheaderbtn'>
              <Row >
                <Button outline color="info" className="headerbtn fa fa-shopping-basket" ></Button>
                <Button outline color="info" onClick={() => history.push('/Login')} className="headerbtn fa fa-user-o"></Button>
              </Row>
            </Col>
            <Collapse isOpen={!togglesearch} navbar>
                <InputGroup className='in'>
                  <InputGroupAddon addonType="prepend">
                    <Button color="info">جستجو</Button>
                  </InputGroupAddon>
                  <Input type='text' className='intext' />
                </InputGroup>
              </Collapse>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default HeaderMobile;