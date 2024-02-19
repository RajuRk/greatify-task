import './features.css';
import { Col, Container, Row } from 'react-bootstrap';
import Arrow from '../../assets/angle-double-right.png';
import FeatureImg from '../../assets/feature-img.png';

export default function Features() {
  return (
    <div id='features'>
      <section>
        <Container fluid className='pt-5 pb-5'>
          <Row>
            <Col md={12} lg={12}>
              <div className='feature-title'>
                <h3>Features</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={6} className='feature-left'>
              <div className='feature-content'>
                <p className='feature-subtitle'>
                  Unleashing Potential Through Strategic Lead Generation
                </p>
                <p className='feature-para'>
                  Empowering businesses with the right tools and strategies to
                  turn leads into loyal customers.
                </p>
                <ul>
                  <li>
                    <img src={Arrow} alt='' /> Proven Expertise
                  </li>
                  <li>
                    <img src={Arrow} alt='' /> Customised Solutions
                  </li>
                  <li>
                    <img src={Arrow} alt='' /> Results-Driven Approach
                  </li>
                  <li>
                    <img src={Arrow} alt='' /> Proven Expertise
                  </li>
                  <li>
                    <img src={Arrow} alt='' /> Customised Solutions
                  </li>
                  <li>
                    <img src={Arrow} alt='' /> Results-Driven Approach
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className='border-img'>
                <img src={FeatureImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
