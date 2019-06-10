import React, { PureComponent } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import '../header.css'

const fontSize = {
    'font-size': '12px'
}

class Profile extends PureComponent {
  render() {
    return (
        <>

          <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className='justify-content-left'>
                        <a class="btn" href="#" style={fontSize} >پروفایل من</a>
                        <img src="../assets/images/cushy-administrator-male-64.png" className='circle-img' />
                    </Col>
                </Row>
          </Container>


        </>
    );
  }
}

export default Profile;
