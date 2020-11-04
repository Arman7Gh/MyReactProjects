import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Nav, NavItem, Button, Row, Col, Container,
  Input, InputGroup, InputGroupAddon, ButtonGroup
} from 'reactstrap';
import PropTypes from 'prop-types';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/free-sugar.svg'
import sygnet from '../../assets/img/brand/free-sugar.svg'
import { connect } from 'react-redux'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};


class DefaultHeader extends Component {

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (

      <React.Fragment>
        <div className='header'>
          <Container
            className="themed-container"
            fluid={true}
          >
            <AppSidebarToggler className="d-lg-none " display="md" mobile />


            <AppNavbarBrand
              full={{ src: logo, width: 120, height: 52, alt: 'Papeli Logo' }}
              minimized={{ src: sygnet, width: 30, height: 30, alt: 'Papeli Logo' }}
            />

            <AppSidebarToggler className="d-md-down-none " outline color='info' display="lg" />

            <Nav className="d-md-down-none" navbar>
              <NavItem className="px-3">
                <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
              </NavItem>
              <NavItem className="px-3">
                <NavLink to="#" className="nav-link">Settings</NavLink>
              </NavItem>
            </Nav>


            <InputGroup className='in'>
              <InputGroupAddon addonType="prepend">
                <Button color="info">جستجو</Button>
              </InputGroupAddon>
              <Input className='intext' />
            </InputGroup>

            <Button outline color="info" className="fa fa-shopping-basket"><span className='p-1'>{this.props.myCounter}</span></Button>

          </Container>
        </div>
      </React.Fragment>

    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    myCounter: state.counterState.counter
  }
}

export default connect(mapStateToProps)(DefaultHeader);
