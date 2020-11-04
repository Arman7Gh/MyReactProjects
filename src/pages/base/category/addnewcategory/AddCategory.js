import React, { useState, useEffect } from 'react'
import {
  Card, Button, CardHeader, CardBody,
  Form, Input, InputGroup,
  InputGroupAddon, InputGroupText,
  FormGroup
} from 'reactstrap';
import axios from 'axios';

// import '../../dashboard.css'

export const AddCategory = () => {

  // const [categoryinfo, setcategoryinfo] = useState({
  //   categoryId: "",
  //   categoryName: "",
  //   isActive: true,
  //   description: ""
  // })

  const [currentcategory, setCurrentcategory] = useState({
    categoryName: "",
    description: ""
  })


  const onChangeValue = (event) => {
    setCurrentcategory({
      ...currentcategory,
      [event.target.name]: event.target.value
    });
    console.log(currentcategory)
  }

  const clearcurrentcategory = () => {
    setCurrentcategory({
      categoryName: "",
      description: ""
    })
  }


  const addnewCategory = () => {
    // const apiUrl = 'http://localhost:8080/category/add';
    const apiUrl = 'http://apitester.ir/api/Categories';
    const category = JSON.stringify(currentcategory);

    const config = {
      method: "POST",
      body: category,
    }

    fetch(apiUrl, config)
      .then(response => response.json())
      .then(result => {
        // console.log(category)
        // console.log(result);
      })
    clearcurrentcategory();
  };

  return (
    <div className='addbox'>
      <Card  >
        <CardHeader><b>اضافه کردن دسته جدید</b></CardHeader>
        <CardBody className="inputbox" >
          {/* <Form className='forms'
          // onSubmit={addnewUser}
          > */}
          <p className="text-muted">لطفا اطلاعات زیر را تکمیل فرمایید </p>
          <FormGroup>
            <InputGroup className='input'>
              <InputGroupAddon addonType="append">
                <InputGroupText className="inputtext">عنوان دسته </InputGroupText>
              </InputGroupAddon>
              <Input type="text"
                className="inputcontact"
                name="categoryName"
                onChange={onChangeValue} />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup className='input'>
              <InputGroupAddon addonType="append">
                <InputGroupText className="inputtext"> توضیحات </InputGroupText>
              </InputGroupAddon>
              <Input type="textarea"
                className="inputcontact"
                name="description"
                onChange={onChangeValue} />
            </InputGroup>
          </FormGroup>

          <Button
            type="butten"
            //  type="submit"
            color="info"
            onClick={addnewCategory}
          // className="button input"
          >ارسال</Button>
          {/* </Form> */}

        </CardBody>
      </Card>
    </div>
  )
}
export default AddCategory;