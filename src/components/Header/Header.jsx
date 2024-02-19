import './header.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Logo from '../../assets/greatify_logo.png';
import Hamburger_Menu from '../../assets/Hamburger_Menu.png';

export default function Header() {
  return (
    <div id='header'>
      <section className='desktop-view'>
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <div className='logo'>
                <img src={Logo} alt='Logo' />
              </div>
            </Col>
            <Col md={6} lg={6} className='nav-right'>
              <div className='nav-with-button'>
                <div className='nav'>
                  <ul>
                    <li className='active'>Home</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className='nav-button'>
                  <Button>Book a free demo</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='mobileView'>
        <Container>
          <Row className='pt-3 pb-3'>
            <Col>
              <div className='logo'>
                <img src={Logo} alt='Logo' />
              </div>
            </Col>
            <Col className='menu-col'>
              <div className='burger-menu'>
                <img src={Hamburger_Menu} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
