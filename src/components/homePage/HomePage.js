import React, { Fragment } from 'react';
import { CeTratam } from 'assets/svgAssets';
import Contact from 'components/contact/Contact';
import Separator from 'components/shared/Separator';
import HomePageIntro from './HomePageIntro';

const HomePage = () => {
  return (
    <Fragment>
      <HomePageIntro />
      <Separator>
        <CeTratam />
      </Separator>
      <Contact />
    </Fragment>
  );
};

export default HomePage;