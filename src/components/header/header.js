import React, { PureComponent } from 'react';
import './header.css';
import NavMenu from './menu/nav-menu';
import {Container,Row,Col} from 'react-bootstrap';

class Header extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <>

        <Container fluid={true}  className="bg-light py-2 pp" >
          <Container>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                      <NavMenu />
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
