import React from 'react'
import { Row, Col } from 'reactstrap'


import './product.css'


export const Productbox = ({ remove, item }) => {


  return (
    <>
      <Row className='m-3'>
        <Col sx='12' className='p-1 pt-0'> <h1><b>دسته بندی محصولات</b></h1> </Col>
      </Row>
      <Row className='m-4'>
        <Col sm='6' md='3' className='p-2' >
          <div className='productbox b1 ' ></div>
          <p><b>استند</b></p>
        </Col>
        <Col sm='6' md='3' className='p-2' >
          <div className='productbox b2' ></div>
          <p><b>جعبه</b></p>
        </Col>
        <Col sm='6' md='3' className='p-2' >
          <div className='productbox b3' ></div>
          <p><b>تابلو</b></p>
        </Col>
        <Col sm='6' md='3' className='p-2' >
          <div className='productbox b4' ></div>
          <p><b>چراغ</b></p>
        </Col>
      </Row>
    </>

  )
}
