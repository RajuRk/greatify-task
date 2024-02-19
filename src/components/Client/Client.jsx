import './client.css';
import { Col, Container, Row } from 'react-bootstrap';
import GreenCircle from '../../assets/green-half-circle.png';
import Profile1 from '../../assets/profile-1.png';
import Profile2 from '../../assets/profile-2.png';
import Profile3 from '../../assets/profile-3.png';
import Quote from '../../assets/quote-left.png';

export default function Client() {
  return (
    <div id='client'>
      <section>
        <Container fluid className='pt-5 pb-5'>
          <div className='half-circle-line'>
            <img src={GreenCircle} alt='' />
          </div>
          <Row>
            <Col md={12} lg={12}>
              <div className='client-title'>
                <h2>What Client Says</h2>
                <p>110+ people have said how we good we are</p>
              </div>
            </Col>
          </Row>
          <Row className='client-row'>
            <Col md={4} lg={4}>
              <div className='client-says'>
                <div className='client-img'>
                  <img src={Profile1} alt='' />
                </div>
                <div className='client-text'>
                  <img src={Quote} alt='' />
                  <p className='client-words'>
                    Greatify approach to lead generation is unparalleled. The
                    quality of leads and the support we received exceeded our
                    expectations."
                  </p>
                  <p className='client-name'>- Nina Hudson</p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className='client-says'>
                <div className='client-img'>
                  <img src={Profile2} alt='' />
                </div>
                <div className='client-text'>
                  <img src={Quote} alt='' />
                  <p className='client-words'>
                    Greatify approach to lead generation is unparalleled. The
                    quality of leads and the support we received exceeded our
                    expectations."
                  </p>
                  <p className='client-name'>- Nina Hudson</p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className='client-says'>
                <div className='client-img'>
                  <img src={Profile3} alt='' />
                </div>
                <div className='client-text'>
                  <img src={Quote} alt='' />
                  <p className='client-words'>
                    Greatify approach to lead generation is unparalleled. The
                    quality of leads and the support we received exceeded our
                    expectations."
                  </p>
                  <p className='client-name'>- Nina Hudson</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
