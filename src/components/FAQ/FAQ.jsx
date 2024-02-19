import './faq.css';
import { Col, Container, Row } from 'react-bootstrap';
import Plus from '../../assets/plus.png';

export default function FAQ() {
  return (
    <div id='faq'>
      <section>
        <Container className='pt-5 pb-5'>
          <Row>
            <Col>
              <div className='faq-title'>
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
                <p>Everything You Need to Know</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='faq-ques'>
                <div className='faq-ques-text'>
                  <p>Why Choose Us?</p>
                </div>
                <div className='faq-plus'>
                  <img src={Plus} alt='' />
                </div>
              </div>
              <div className='faq-ques'>
                <div className='faq-ques-text'>
                  <p>Is there any membership program available?</p>
                </div>
                <div className='faq-plus'>
                  <img src={Plus} alt='' />
                </div>
              </div>
              <div className='faq-ques'>
                <div className='faq-ques-text'>
                  <p>How to book an appointment?</p>
                </div>
                <div className='faq-plus'>
                  <img src={Plus} alt='' />
                </div>
              </div>
              <div className='faq-ques'>
                <div className='faq-ques-text'>
                  <p>Can you provide digital services?</p>
                </div>
                <div className='faq-plus'>
                  <img src={Plus} alt='' />
                </div>
              </div>
              <div className='faq-ques'>
                <div className='faq-ques-text'>
                  <p>What are the promotions going on?</p>
                </div>
                <div className='faq-plus'>
                  <img src={Plus} alt='' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
