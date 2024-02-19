import './benefits.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Frame1 from '../../assets/Frame-5.png';
import Frame2 from '../../assets/Frame-9.png';
import Frame3 from '../../assets/Frame-10.png';

export default function Benefits() {
  return (
    <div id='benefits'>
      <section>
        <Container className='pt-5 pb-5'>
          <Row>
            <Col md={12} lg={12}>
              <div className='benefits-title'>
                <h3>Main Benefits</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4} className='benefits-bg'>
              <div className='benefits-card'>
                <img src={Frame1} alt='' />
                <p>Track your customers directly from website</p>
              </div>
            </Col>
            <Col md={4} lg={4} className='benefits-bg'>
              <div className='benefits-card'>
                <img src={Frame2} alt='' />
                <p>Understand sales performance better</p>
              </div>
            </Col>
            <Col md={4} lg={4} className='benefits-bg'>
              <div className='benefits-card'>
                <img src={Frame3} alt='' />
                <p>Get feedbacks live & make improvements</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <div className='btn-cards text-center mt-3'>
                <Button>Get Started</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
