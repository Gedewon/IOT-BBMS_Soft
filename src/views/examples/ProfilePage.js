import React from 'react';
import { compose } from 'recompose';

// import the sessions part's
import {
  withAuthorization,
  withEmailVerification,
} from '../../components/Session';

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import ProfilePageHeader from 'components/Headers/ProfilePageHeader.js';
import DemoFooter from 'components/Footers/DemoFooter.js';

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('landing-page');
    return function cleanup() {
      document.body.classList.remove('landing-page');
    };
  });
  return (
    <>
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={
                  require('assets/img/faces/joe-gardner-2.jpg')
                    .default
                }
              />
            </div>
            <div className="name">
              <h4 className="title">
                Alemnesh Abubeker <br />
              </h4>
              <h6 className="description">Mother</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                It is exceptionally blissful to be a mother.
                Motherhood is tiring but at the same time it is the
                loveliest job. Let us celebrate motherhood in the best
                possible way through some inspiring words.
              </p>
              <br />
              <a href="/account">
                <Button className="btn-round" color="default" outline>
                  {' '}
                  <i className="fa fa-cog" /> Settings
                </Button>
              </a>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === '1' ? 'active' : ''}
                    onClick={() => {
                      toggle('1');
                    }}
                  >
                    Follows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === '2' ? 'active' : ''}
                    onClick={() => {
                      toggle('2');
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col
                          className="ml-auto mr-auto"
                          lg="2"
                          md="4"
                          xs="4"
                        >
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require('assets/img/faces/clem-onojeghuo-2.jpg')
                                .default
                            }
                          />
                        </Col>
                        <Col
                          className="ml-auto mr-auto"
                          lg="7"
                          md="4"
                          xs="4"
                        >
                          <h6>
                            Bereket yohans <br />
                            <small>Father</small>
                          </h6>
                        </Col>
                        <Col
                          className="ml-auto mr-auto"
                          lg="3"
                          md="4"
                          xs="4"
                        >
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require('assets/img/faces/ayo-ogunseinde-2.jpeg')
                                .default
                            }
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Bemnit zewdu <br />
                            <small>Father</small>
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">
                Not following anyone yet :(
              </h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

// export default ProfilePage;
const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(ProfilePage);
