import React from 'react'
import Header from './header/header';
import Footer from './footer'
import {Container,Row,Col, Button} from 'react-bootstrap';

const MasterLayout = (props) => (
    <>
        <div className="rtl">

            <Header />
            
            
            <Container>
                <Row>
                    <Col className='py-2'>
                     <div className="py-4">{props.children}</div>
                     <Button variant="success" size="xl" class="nav-link active">
                        خانه
                    </Button>
                    </Col>
                </Row>
            </Container>


            <Footer />

        </div>
    </>
)



export default MasterLayout;