import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';
import FooterLogo from '../../assets/footer-logo.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import GooglePlay from '../../assets/GP.png';
import AppleStore from '../../assets/AS.png';

export default function Footer() {
  return (
    <div id='footer'>
      <section>
        <Container className='pb-5 pt-5'>
          <Row>
            <Col md={3} lg={3}>
              <div className='footer-col'>
                <img src={FooterLogo} alt='' className='mb-4' />
                <h5>Follow us on</h5>
                <ul className='social-links'>
                  <li>
                    <img src={facebook} alt='' />
                  </li>
                  <li>
                    <img src={twitter} alt='' />
                  </li>
                  <li>
                    <img src={instagram} alt='' />
                  </li>
                  <li>
                    <img src={linkedin} alt='' />
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} lg={3}>
              <div className='footer-col'>
                <h5>Greatify</h5>
                <ul>
                  <li>K2</li>
                  <li>Higher Education</li>
                </ul>
              </div>
            </Col>
            <Col md={3} lg={3}>
              <div className='footer-col'>
                <h5>About</h5>
                <ul>
                  <li>Blog</li>
                  <li>About Us</li>
                  <li>Tearm and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Refunds & Concellation Policy</li>
                </ul>
              </div>
            </Col>
            <Col md={3} lg={3}>
              <div className='footer-col'>
                <h5>Get Greatify App On</h5>
                <div className='download-images'>
                  <img src={GooglePlay} alt='' />
                  <img src={AppleStore} alt='' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
