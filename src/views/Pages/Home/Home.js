import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import PageTitle from '../../../tools/PageTitle/PageTitle'
import { Productbox } from '../../../pages/base/product/Productbox'
// import DefaultHeader from '../../../containers/DefaultLayout/DefaultHeader'
import HeaderDesktap from "../../../tools/Headersite/HeaderDesktap";
import HeaderMobile from "../../../tools/Headersite/HeaderMobile";

const Home = () => {
  return (
    <div>
      <PageTitle title='خانه' />
      <HeaderMobile />
      <HeaderDesktap />
      <Container fluid className='context'>

        <Row className='mr-4 ml-4'>
          <Col xs='12' className='baner'>
            <div className='img1'></div>
          </Col>
        </Row>
        <Row className='m-4'>
          <Col xs='12' md='8' className='homeslidebox1'>
          </Col>
          <Col xs='12' md='3' className='homeslidebox2'>
          </Col>
        </Row>

        <Productbox />

      </Container>
    </div>
  )
}

export default Home;