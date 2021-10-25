import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import LandingPageHeader from 'components/Headers/LandingPageHeader.js';
import DemoFooter from 'components/Footers/DemoFooter.js';

function LandingPage() {
  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('profile-page');
    return function cleanup() {
      document.body.classList.remove('profile-page');
    };
  });
  return (
    <>
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                  The proposed framework uses sensors to screen the
                  baby’s crucial parameters, such as surrounding
                  temperature, humidity, and crying. The system
                  architecture comprises of a child support that will
                  consequently swing employing a motor when the infant
                  cries. Parents can moreover screen their babies’
                  condition through internet and switch on the bedtime
                  song toy found on the child support remotely through
                  the firebase server to entertain the infant. The
                  proposed system model is accepted to guarantee
                  secure operation to empower the baby-parenting
                  anyplace and anytime through the network.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't
                      have to think of implementing.
                    </p>
                    <Button
                      className="btn-link"
                      color="info"
                      href="#pablo"
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful,
                      but remarkably power efficient.
                    </p>
                    <Button
                      className="btn-link"
                      color="info"
                      href="#pablo"
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling
                      sugar paper pastels.
                    </p>
                    <Button
                      className="btn-link"
                      color="info"
                      href="#pablo"
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs
                      related items directly from our sellers.
                    </p>
                    <Button
                      className="btn-link"
                      color="info"
                      href="#pablo"
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 id="aboutus" className="title">
              Let's talk about us
            </h2>
            <Row>
              {/* <Col md="4"> */}
              {/* <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/face_jo.jpg").default}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Yohannes Solomon </CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card> */}
              {/* </Col> */}
              <Col md="12">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={
                          require('assets/img/faces/face_gedi.JPG')
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
                        <CardTitle tag="h4">
                          Gedewon H/Gebrale
                        </CardTitle>
                        <h6 className="card-category">
                          CEO AND FOUNDER
                        </h6>
                        <h6 className="card-category">
                          (Software Developer)
                        </h6>
                      </div>
                    </a>
                    <div>
                      <p className="card-description text-center">
                        Teamwork is the ability to work together
                        toward a common vision. The ability to direct
                        individual accomplishments toward
                        organizational objectives. It is the fuel that
                        allows common people to attain uncommon
                        results.
                      </p>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <a href="https://www.linkedin.com/in/gedewon/">
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        // onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={
                          require('assets/img/faces/face_jo.jpg')
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
                        <CardTitle tag="h4">
                          Yohannes Solomon{' '}
                        </CardTitle>
                        <h6 className="card-category">
                          Mobile App Developer
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure
                      enough of himself and his contribution to praise
                      the skill of the others. No one can whistle a
                      symphony. It takes an orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={
                          require('assets/img/faces/beki_face.jpg')
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
                        <CardTitle tag="h4">Berket Yonas</CardTitle>
                        <h6 className="card-category">
                          Manufacturing
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual
                      member. The strength of each member is the team.
                      If you can laugh together, you can work
                      together, silence isn’t golden, it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <a href="https://www.linkedin.com/in/gedewon/">
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        // onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 id="contactus" className="text-center">
                  Keep in touch?
                </h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button
                        className="btn-fill"
                        color="danger"
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
