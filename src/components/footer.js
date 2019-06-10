import React, { PureComponent } from 'react';
import { Container, Col } from 'react-bootstrap';

class Footer extends PureComponent {
    render() {
        return (<>

<Container fluid={true} className="bg-light py-2">
    <Container>
        <Col>
            <div class="nav justify-content-center">
                تست وب سایت | {new Date().getFullYear()}
            </div>
        </Col>
    </Container>
</Container>


        </>);
    }
}

export default Footer;
