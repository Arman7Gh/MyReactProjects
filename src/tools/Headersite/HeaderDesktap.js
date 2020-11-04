import React from 'react'
// import {history} from "react-router-dom"
import { useHistory } from 'react-router-dom';

import {
  Container, Row, Col, ButtonGroup,
  InputGroup, Input, InputGroupAddon, Button, NavLink,
} from 'reactstrap'

import Menu from './Menu'
import logo from "../../assets/img/brand/papeli-stor-logo110-pix.png"

const HeaderDesktap = () => {

  const history = useHistory()


  return (
    <>
      <div className='headerdesktap'>
        <Container
          className="themed-container"
          fluid={true}
        >
          <Row
            // className='m-atuo'
          >
            <Col xs='2'>
              <NavLink href="/" active><img id='logo' src={logo} alt="Logo" /></NavLink>
            </Col>
            <Col xs={{ size: 5, offset: 1 }} className=' p-3'  >
              <InputGroup className='in'>
                <InputGroupAddon addonType="prepend">
                  <Button color="info">جستجو</Button>
                </InputGroupAddon>
                <Input className='intext' />
              </InputGroup>
            </Col>
            <Col xs='3' className=' pt-3'>
              <ButtonGroup className='in'>
                <Button outline color="info" onClick={() => history.push('/register')}>عضویت</Button>
                <Button outline color="info" onClick={() => history.push('/login')}>ورود</Button>
              </ButtonGroup>
            </Col>
            <Col xs='1' className='p-3'>
              <Button outline color="info" className="fa fa-shopping-basket"></Button>
            </Col>
          </Row>
        </Container>
        <Menu />
      </div>
    </>
  )

}
export default HeaderDesktap;