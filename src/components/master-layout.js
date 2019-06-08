import React from 'react'
import Header from './header/header';
import Footer from './footer'
import {Container,Row,Col} from 'react-bootstrap';

const MasterLayout = (props) => (
    <>
        <div className="rtl">
            <Header />
            
            
            <Container>
                <Row>
                    <Col>
                     <div className="py-4">{props.children}</div>
                    </Col>
                </Row>
            </Container>


            <Footer />
        </div>
    </>
)



export default MasterLayout;