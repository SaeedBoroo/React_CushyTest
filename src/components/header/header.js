import React, { PureComponent } from 'react';
import './header.css';
import NavMenu from './menu/nav-menu';
import {Container,Row,Col} from 'react-bootstrap';
import Profile from './profile/profile';

class Header extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <>

        <Container fluid={true}  className="bg-light py-2 pp" >
          <Container>
                <Row>
                    <Col xs={12} sm={12} md={7} lg={7} >
                      <NavMenu />
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5}>
                      <Profile />
                    </Col>
                </Row>
          </Container>
        </Container>


        </>
      </React.Fragment>
    );
  }
}

export default Header;
