import React, { useState } from 'react'
import { useHistory } from "react-router";
import {
  Card, Button, CardHeader, CardBody,
  Col, Container, Form, Input, InputGroup,
  InputGroupAddon, InputGroupText, Row,
  FormGroup, Label
} from 'reactstrap';
import { v4 as uuid } from 'uuid'
import '../Login&Reguest.css'

const Request = () => {
  const history = useHistory()
  const [usercurrent, setusercurrent] = useState({
    userId: "",
    userName: "",
    password: "",
    isActive: true,
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobile: "",
    city: "",
    address: ""
  })


  const onChangeValue = (event) => {
    setusercurrent({
      ...usercurrent,
      [event.target.name]: event.target.value
    });
  }

  const addnewUser = () => {
    usercurrent.userId = uuid();
    const apiUrl = 'http://localhost:8080/user/add';
    const user = usercurrent;
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        console.log(user)

        if (result.status === 200) {
          history.push('/')
        }
      });
  };


  return (
    <div className="justify-content-center align-items-center" >
      <Container>
        <Row className='page-body'>
          <Col md='8' sm='12'>
            <Card >
              <CardHeader><b>عضویت</b></CardHeader>
              <CardBody className="inputbox" >
                <Form
                // onSubmit={()=>addnewUser(e)}
                >
                  <p className="text-muted">لطفا اطلاعات زیر را وارد کنید</p>
                  <FormGroup>
                    <InputGroup className='input'>
                      <InputGroupAddon addonType="append">
                        <InputGroupText className="inputtext">نام</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"
                        name="firstName"
                        onChange={onChangeValue} />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup className='input'>
                      <InputGroupAddon addonType="append">
                        <InputGroupText className="inputtext"> نام خانوادگی</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"
                        name="lastName"
                        onChange={onChangeValue} />
                    </InputGroup>
                  </FormGroup>

                  <Row className='input'>
                    <Col xs='3'>
                      <InputGroupText className="inputtext" > جنسیت </InputGroupText>
                    </Col>
                    <Col sm="2" className='pt-1 ml-1'>
                      <FormGroup className='input' >
                        <Label>مرد </Label>
                        <Input className='ml-2 mt-1'
                          type="radio"
                          name="gender"
                          value="1"
                          onChange={onChangeValue} />
                      </FormGroup>
                    </Col>
                    <Col sm="2" className='pt-1 ml-1'>
                      <FormGroup>
                        <Label>زن</Label>
                        <Input className='ml-2 mt-1'
                          type="radio"
                          name="gender"
                          value='0'
                          onChange={onChangeValue} />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <InputGroup className='input'>
                      <InputGroupAddon addonType="append">
                        <InputGroupText className="inputtext"> ایمیل</InputGroupText>
                      </InputGroupAddon>
                      <Input type='email'
                        required="required"
                        name="email"
                        onChange={onChangeValue} />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup className='input'>
                      <InputGroupAddon addonType="append">
                        <InputGroupText className="inputtext"> تلفن همراه</InputGroupText>
                      </InputGroupAddon>
                      <Input pattern="[0-9]{11}"
                        placeholder="09*********"
                        type="text"
                        name="mobile"
                        required="required"
                        onChange={onChangeValue} />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup className='input'>
                      <InputGroupAddon addonType="append">
                        <InputGroupText className="inputtext"> شهر </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"
                        name="city"
                        onChange={onChangeValue} />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup className='input'>
                      <InputGroupAddon addonType="append">
                        <InputGroupText className="inputtext"> آدرس </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"
                        name="address"
                        onChange={onChangeValue} />
                    </InputGroup>
                  </FormGroup>
                  <hr />
                  <p>اطلاعات کاربری</p>
                  <FormGroup>
                    <InputGroup className='input'>
                      <InputGroupAddon addonType="append">
                        <InputGroupText className="inputtext">نام کاربری</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"
                        name="userName"
                        required="required"
                        onChange={onChangeValue} />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className='input'>
                      <InputGroupAddon addonType="append">
                        <InputGroupText className="inputtext">رمزعبور</InputGroupText>
                      </InputGroupAddon>
                      <Input type="password"
                        name="password"
                        required="required"
                        onChange={onChangeValue} />
                    </InputGroup>
                  </FormGroup>
                  <Button
                    type="butten"
                    color="info"
                    onClick={addnewUser}
                  >ارسال</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Request
