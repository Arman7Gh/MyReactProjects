import React, { Component } from 'react';
import {
	Button, Card, CardBody, CardGroup, CardHeader,
	Col, Container, Form, Input, InputGroup,
	InputGroupAddon, InputGroupText, Row
} from 'reactstrap';

import '../Login&Reguest.css'


 class Login extends Component {

	state = {
		userName: '',
		password: '',
	}


	login = () => {
		const apiUrl = 'http://apitester.ir/api/Users/authenticate?userName=' + this.state.userName + "&password=" + this.state.password;
		fetch(apiUrl, {
			method: "Post",
		})
		.then(response => {
      if(response.status != 200)
      {
        alert("نام کاربری یا رمز عبور صحیح نمی باشد");
        return;
      } else {
        response.json().then(result => {
          console.log(result);
          localStorage.setItem('token', result.token);
          localStorage.setItem('user', JSON.stringify(result));
          //redirect to dashboard
          this.props.history.push('/');
          window.location.reload();
        })
      }
    });
	}

	render() {
		return (
			<div className="app flex-row align-items-center" >
				<Container>
					<Row className="justify-content-center">
						<Col md="8">
							<CardGroup>
								<Card >
									<CardHeader><b>ورود به حساب کاربری</b></CardHeader>
									<CardBody className="inputbox" >
										<Form className='forms'>
											<p className="text-muted">لطفا اطلاعات زیر را وارد کنید</p>
											<InputGroup className="mb-3">
												<Input type="text"
													autoComplete="username"
													className="inputtext"
													placeholder="نام کاربری"
													onChange={(event) => {
														this.setState({ userName: event.target.value })
													}} />
												<InputGroupAddon addonType="append">
													<InputGroupText>
														<i className="fa fa-user"></i>
													</InputGroupText>
												</InputGroupAddon>
											</InputGroup>

											<InputGroup className="mb-4">
												<Input className="inputtext"
													type="password"
													autoComplete="current-password"
													placeholder="رمزعبور " onChange={(event) => {
														this.setState({ password: event.target.value })
													}} />
												<InputGroupAddon addonType="append">
													<InputGroupText>
														<i className="fa fa-unlock"></i>
													</InputGroupText>
												</InputGroupAddon>

											</InputGroup>
											<Row>
												<Col xs="6">
													<Button color="info"  onClick={this.login}>ورود</Button>
												</Col>
												<Col xs="6" className="text-right">
													<Button color="link" className="px-0">رمز خود را فراموش کرده ام</Button>
												</Col>
												<Col className='bt' xs="6">
												<Button color="info"  onClick={() => this.props.history.push('/Request')}>ثبت نام</Button>
											</Col>
											</Row>
											
										</Form>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Login;