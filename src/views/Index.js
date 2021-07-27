import React from 'react';
import { compose } from 'recompose';

// session for authentication
import {
  withAuthorization,
  withEmailVerification,
} from '../components/Session';

// core components
import IndexHeader from 'components/Headers/IndexHeader.js';
import DemoFooter from 'components/Footers/DemoFooter.js';

import SectionNucleoIcons from 'views/index-sections/SectionNucleoIcons.js';
import SectionDark from 'views/index-sections/SectionDark.js';

function Index() {
  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('index');
    return function cleanup() {
      document.body.classList.remove('index');
    };
  });
  return (
    <>
      <IndexHeader />
      <div className="main">
        <SectionNucleoIcons />

        <SectionDark />

        <DemoFooter />
      </div>
    </>
  );
}
const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Index);
