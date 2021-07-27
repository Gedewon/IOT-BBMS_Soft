import React from 'react';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="12" md="12" align="center">
              <h2 className="title">Control Dashboard</h2>
              <br />
              <p className="description">
                This is the section to moniter your baby condition
                over the internet
              </p>
              <br />
              <Button
                className="btn-round"
                color="danger"
                // href="/nucleo-icons"
                target="_blank"
              >
                View Demo Data
              </Button>
              <Button
                className="btn-round ml-1"
                color="danger"
                // href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                View All Data
              </Button>
            </Col>
            <Col lg="12" md="12">
              <div className="icons-container"></div>
            </Col>
          </Row>
        </Container>
      </div>{' '}
      <div className=" section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col className="mx-auto" md="4">
              <Card className=" card-plain">
                <div className="card-avatar">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      align="center"
                      alt="..."
                      src={
                        require("assets/img/controll_unit's/fan_icon.png")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="author">
                      <CardTitle tag="h4">Fan</CardTitle>
                      <h6 className="card-category">Toggler </h6>
                    </div>
                  </a>
                </CardBody>
                <div>
                  <Button
                    type="button"
                    class="btn btn-dark btn-lg "
                    align="right"
                  >
                    <label> Turn ON</label>
                  </Button>
                </div>
              </Card>
            </Col>
            {/* section of the motor  */}

            <Col className="mx-auto" md="4">
              <Card className=" card-plain">
                <div className="card-avatar">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      align="center"
                      alt="..."
                      src={
                        require("assets/img/controll_unit's/motor_260x260.jpg")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="author">
                      <CardTitle tag="h4">Motor</CardTitle>
                      <h6 className="card-category">Toggler </h6>
                    </div>
                  </a>
                </CardBody>
                <div>
                  <Button
                    type="button"
                    class="btn btn-dark btn-lg "
                    align="right"
                  >
                    <label> Turn ON</label>
                  </Button>
                </div>
              </Card>
            </Col>

            {/* section of the Music toy   */}

            <Col className="mx-auto" md="4">
              <Card className=" card-plain">
                <div className="card-avatar">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      align="center"
                      alt="..."
                      src={
                        require("assets/img/controll_unit's/music.jpg")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="author">
                      <CardTitle tag="h4">Music</CardTitle>
                      <h6 className="card-category">Toggler </h6>
                    </div>
                  </a>
                </CardBody>
                <div>
                  <Button
                    type="button"
                    class="btn btn-dark btn-lg "
                    align="right"
                  >
                    <label> Turn ON</label>
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionNucleoIcons;
