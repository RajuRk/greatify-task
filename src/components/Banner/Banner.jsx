import './banner.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MobileBanner from '../../assets/mobile-banner.png';
import CircleMobile from '../../assets/mobile-circle.png';

export default function Banner() {
  return (
    <div id='banner'>
      <section className='desktop-view'>
        <Container fluid>
          <Row className='banner-row'>
            <Col md={6} lg={6} className='banner-left'>
              <div className='banner-content'>
                <h2>Welcome to Greatify</h2>
                <h4>
                  "Yout Gateway to Quality <br />
                  Marketing Leads"
                </h4>
                <p>
                  At Greatify, we specialise in deliveries high-quality marking
                  leads to supercharge your business growth
                </p>
                <Button>Get Started</Button>
              </div>
            </Col>
            <Col md={6} lg={6}></Col>
          </Row>
        </Container>
      </section>
      <section className='mobileView'>
        <Container className='mobile-container'>
          <Row className='mobile-row'>
            <Col sm={12} md={12}>
              <div className='mobile-banner-content pt-5 pb-5'>
                <h2>Welcome to Greatify</h2>
                <h4>
                  "Yout Gateway to Quality <br />
                  Marketing Leads"
                </h4>
                <p>
                  At Greatify, we specialise in deliveries high-quality marking
                  leads to supercharge your business growth
                </p>
                <Button>Get Started</Button>
              </div>
            </Col>
            <Col sm={12} md={12}>
              <div className='mobile-banner-img'>
                <img src={MobileBanner} alt='' />
              </div>
            </Col>
          </Row>
          <div className='circle-mobile-image'>
            <img src={CircleMobile} alt='' />
          </div>
        </Container>
      </section>
    </div>
  );
}
