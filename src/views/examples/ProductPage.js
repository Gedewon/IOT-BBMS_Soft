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
import Switch from '../../components/Switch/Switch';
import Read from '../../components/ReadSensorValue/Read';
import image from '../../assets/img/sub.png';

export default function DocumentPage(props) {
  return (
    <div className=" section-dark section-nucleo-icons">
      <Container>
        <Row>
          <Col className="mx-auto" md="4">
            <Card className=" card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    align="center"
                    alt="..."
                    src={require('assets/img/Bed/bd1.jpg').default}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">G1-cabinet</CardTitle>
                    <h6 className="card-category">
                      Fixed Price : 20,000 Birr{' '}
                    </h6>{' '}
                  </div>
                  <div
                    className="author"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      //   height: '100vh',
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="danger"
                      //   href="/login"
                      size="lg"
                      // target="_blank"
                    >
                      <i className="nc-icon nc-"></i> order now
                    </Button>
                  </div>
                </a>
              </CardBody>
              {/* <div>
              <Switch id={`Fan`} />
            </div> */}
            </Card>
          </Col>
          <Col className="mx-auto" md="4">
            <Card className=" card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    align="center"
                    alt="..."
                    src={require('assets/img/Bed/bd2.jpg').default}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">
                      G0-Rotational Cradle
                    </CardTitle>
                    <h6 className="card-category">
                      Fixed Price : 13,000 Birr{' '}
                    </h6>{' '}
                  </div>
                  <div
                    className="author"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      //   height: '100vh',
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="danger"
                      //   href="/login"
                      size="lg"
                      // target="_blank"
                    >
                      <i className="nc-icon nc-"></i> order now
                    </Button>
                  </div>
                </a>
              </CardBody>
              {/* <div>
              <Switch id={`Fan`} />
            </div> */}
            </Card>
          </Col>
          <Col className="mx-auto" md="4">
            <Card className=" card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    align="center"
                    alt="..."
                    src={require('assets/img/Bed/bd12.jpg').default}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">
                      G0-Rotational Cradle
                    </CardTitle>
                    <h6 className="card-category">
                      Fixed Price : 10,000 Birr{' '}
                    </h6>{' '}
                  </div>
                  <div
                    className="author"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      //   height: '100vh',
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="danger"
                      //   href="/login"
                      size="lg"
                      // target="_blank"
                    >
                      <i className="nc-icon nc-"></i> order now
                    </Button>
                  </div>
                </a>
              </CardBody>
              {/* <div>
              <Switch id={`Fan`} />
            </div> */}
            </Card>
          </Col>
          <Col className="mx-auto" md="4">
            <Card className=" card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    align="center"
                    alt="..."
                    src={require('assets/img/Bed/bd3.jpg').default}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">G1 - Double Bed</CardTitle>
                    <h6 className="card-category">
                      Fixed Price : 30,000 Birr{' '}
                    </h6>{' '}
                  </div>
                  <div
                    className="author"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      //   height: '100vh',
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="danger"
                      //   href="/login"
                      size="lg"
                      // target="_blank"
                    >
                      <i className="nc-icon nc-"></i> order now
                    </Button>
                  </div>
                </a>
              </CardBody>
              {/* <div>
              <Switch id={`Fan`} />
            </div> */}
            </Card>
          </Col>

          <Col className="mx-auto" md="4">
            <Card className=" card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    align="center"
                    alt="..."
                    src={require('assets/img/Bed/bd4.jpg').default}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">G0-Cabinet</CardTitle>
                    <h6 className="card-category">
                      Fixed Price : 23,000 Birr{' '}
                    </h6>{' '}
                  </div>
                  <div
                    className="author"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      //   height: '100vh',
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="danger"
                      //   href="/login"
                      size="lg"
                      // target="_blank"
                    >
                      <i className="nc-icon nc-"></i> order now
                    </Button>
                  </div>
                </a>
              </CardBody>
              {/* <div>
              <Switch id={`Fan`} />
            </div> */}
            </Card>
          </Col>
          <Col className="mx-auto" md="4">
            <Card className=" card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    align="center"
                    alt="..."
                    src={require('assets/img/Bed/bd6.jpg').default}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">New bed</CardTitle>
                    <h6 className="card-category">
                      Fixed Price : 16,000 Birr{' '}
                    </h6>{' '}
                  </div>
                  <div
                    className="author"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      //   height: '100vh',
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="danger"
                      //   href="/login"
                      size="lg"
                      // target="_blank"
                    >
                      <i className="nc-icon nc-"></i> order now
                    </Button>
                  </div>
                </a>
              </CardBody>
              {/* <div>
              <Switch id={`Fan`} />
            </div> */}
            </Card>
          </Col>

          <Col className="mx-auto" md="4">
            <Card className=" card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    align="center"
                    alt="..."
                    src={require('assets/img/Bed/bd7.jpg').default}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">New bed</CardTitle>
                    <h6 className="card-category">
                      Fixed Price : 18,000 Birr{' '}
                    </h6>{' '}
                  </div>
                  <div
                    className="author"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      //   height: '100vh',
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="danger"
                      //   href="/login"
                      size="lg"
                      // target="_blank"
                    >
                      <i className="nc-icon nc-"></i> order now
                    </Button>
                  </div>
                </a>
              </CardBody>
              {/* <div>
              <Switch id={`Fan`} />
            </div> */}
            </Card>
          </Col>
          <Col className="mx-auto" md="4">
            <Card className=" card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    align="center"
                    alt="..."
                    src={require('assets/img/Bed/bd8.jpg').default}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">New bed</CardTitle>
                    <h6 className="card-category">
                      Fixed Price : 13,000 Birr{' '}
                    </h6>{' '}
                  </div>
                  <div
                    className="author"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      //   height: '100vh',
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="danger"
                      //   href="/login"
                      size="lg"
                      // target="_blank"
                    >
                      <i className="nc-icon nc-"></i> order now
                    </Button>
                  </div>
                </a>
              </CardBody>
              {/* <div>
              <Switch id={`Fan`} />
            </div> */}
            </Card>
          </Col>

          <Col className="mx-auto" md="4">
            <Card className=" card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    align="center"
                    alt="..."
                    src={require('assets/img/Bed/bd12.jpg').default}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">New bed</CardTitle>
                    <h6 className="card-category">
                      Fixed Price :10,000 Birr{' '}
                    </h6>{' '}
                  </div>
                  <div
                    className="author"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      //   height: '100vh',
                    }}
                  >
                    <Button
                      className="btn-round"
                      color="danger"
                      //   href="/login"
                      size="lg"
                      // target="_blank"
                    >
                      <i className="nc-icon nc-"></i> order now
                    </Button>
                  </div>
                </a>
              </CardBody>
              {/* <div>
              <Switch id={`Fan`} />
            </div> */}
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {/* <Col className="mx-auto" md="4"></Col> */}
          <Col md="12">
            <img
              src={image}
              className="mx-auto d-block"
              width={600}
              height={800}
            />
          </Col>
          {/* <Col className="mx-auto" md="4"></Col> */}
        </Row>
      </Container>
      {/* < className="fluid">
        {/* <Image src="../../assets/img/sub.png" fluid />
        <img src={image} height={100} width={100} /> */}
    </div>
  );
}
