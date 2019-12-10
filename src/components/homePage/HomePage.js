import React, { Fragment } from 'react';
import { CeTratam } from 'assets/svgAssets';
import Contact from 'components/contact/Contact';
import Proiecte from 'components/proiecte/Proiecte';
import Separator from 'components/shared/Separator';
import DespreNoi from 'components/despreNoi/DespreNoi';
import HomePageIntro from './HomePageIntro';

const HomePage = () => {
  return (
    <Fragment>
      <HomePageIntro />
      <Separator>
        <CeTratam />
      </Separator>
      <Contact />
      <Separator>
        <CeTratam />
      </Separator>
      <DespreNoi />
      <Separator>
        <CeTratam />
      </Separator>
      <Proiecte />
    </Fragment>
  );
};

export default HomePage;