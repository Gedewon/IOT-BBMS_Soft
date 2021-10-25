import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// pages
import Index from 'views/Index.js';
import NucleoIcons from 'views/NucleoIcons.js';
import LandingPage from 'views/examples/LandingPage.js';
import ProfilePage from 'views/examples/ProfilePage.js';
import DocumentPage from 'views/examples/DocumentPage.js';
import ProductPage from 'views/examples/ProductPage.js';
import LoginPage from 'views/examples/login';
import Signup from 'views/examples/Signup.js';
import Account from './components/Account/index';
import AdminPage from './views/examples/AdminPage';
// others
import Navigation from './components/Navigation/Navigation';

// import Firebase, { FirebaseContext } from './components/Firebase';
import { withAuthentication } from '../src/components/Session';
import PasswordForgetPage from 'views/examples/PasswordForget';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/pw-forget"
        render={(props) => <PasswordForgetPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/document-page"
        render={(props) => <DocumentPage {...props} />}
      />
      <Route
        path="/product-page"
        render={(props) => <ProductPage {...props} />}
      />
      <Route
        path="/login"
        render={(props) => <LoginPage {...props} />}
      />
      <Route
        path="/signup"
        render={(props) => <Signup {...props} />}
      />
      <Route
        path="/account"
        render={(props) => <Account {...props} />}
      />
      <Route
        path="/admin"
        render={(props) => <AdminPage {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>
);
export default withAuthentication(App);
