import './count.css';
import { Col, Container, Row } from 'react-bootstrap';
import AboutImg from '../../assets/About_Img.png';

export default function Count() {
  return (
    <div id='count'>
      <section>
        <Container>
          <Row className='count-row desktop-count'>
            <Col md={3} lg={3} className='counter-col count-line'>
              <div className='counter'>
                <p className='count-word'>clients</p>
                <p className='count-num'>100+</p>
              </div>
            </Col>
            <Col md={3} lg={3} className='counter-col count-line'>
              <div className='counter'>
                <p className='count-word'>projects</p>
                <p className='count-num'>58</p>
              </div>
            </Col>
            <Col md={3} lg={3} className='counter-col count-line'>
              <div className='counter'>
                <p className='count-word'>customer</p>
                <p className='count-num'>100+</p>
              </div>
            </Col>
            <Col md={3} lg={3} className='counter-col'>
              <div className='counter'>
                <p className='count-word'>clients</p>
                <p className='count-num'>100+</p>
              </div>
            </Col>
          </Row>

          <Row className='count-row mobile-count'>
            <Col md={12} className='counter-col count-line'>
              <div className='counter'>
                <p className='count-word'>clients</p>
                <p className='count-num'>100+</p>
              </div>
            </Col>
            <Col md={12} className='counter-col count-line'>
              <div className='counter'>
                <p className='count-word'>projects</p>
                <p className='count-num'>58</p>
              </div>
            </Col>
            <Col md={12} className='counter-col count-line'>
              <div className='counter'>
                <p className='count-word'>customer</p>
                <p className='count-num'>100+</p>
              </div>
            </Col>
            <Col md={12} className='counter-col'>
              <div className='counter'>
                <p className='count-word'>clients</p>
                <p className='count-num'>100+</p>
              </div>
            </Col>
          </Row>

          <Row className='aboutus-right'>
            <Col md={6} lg={6}>
              <div className='About-img'>
                <img src={AboutImg} alt='' />
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className='about-content'>
                <h3>About Us</h3>
                <p className='subcontent'>
                  Unleashing Potential Through Strategic Lead Generation
                </p>
                <p className='subpara'>
                  A 360˚ suite that Integrates technology, enhances learning,
                  and ensures administrative excellence, leading your
                  institution to success.
                </p>
                <p className='subpara'>
                  A 360˚ suite that Integrates technology, enhances learning,
                  and ensures administrative excellence.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
