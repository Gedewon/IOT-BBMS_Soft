import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Happy to Monitor your Baby</h2>
              <p className="description">
                you can get the analysis on the data collected by our
                system.you can further check out the recommendation
                and the prediction on the selected data set's.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
