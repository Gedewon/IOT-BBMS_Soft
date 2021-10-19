/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Row, Container } from 'reactstrap';

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          {/* <nav className="footer-nav">
            <ul>
              <li>
                <a href="#">Analysis</a>
              </li>
              <li>
                <a href="#">Prediction</a>
              </li>
              <li>
                <a href="#">recommendation</a>
              </li>
            </ul>
          </nav> */}
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{' '}
              <i className="fa fa-heart heart" /> by Gedewon
              Haylegebrale
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
