import { AuthUserContext } from '../Session';
// import SignOutButton from "../SignOut/SignOut";
import IndexNavbar from 'components/Navbars/IndexNavbar';
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <IndexNavbar authUser={authUser} />
);

const NavigationNonAuth = () => <ExamplesNavbar />;

export default Navigation;
