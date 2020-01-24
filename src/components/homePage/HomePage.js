import React, { Fragment } from 'react';
import { CeTratam } from 'assets/svgAssets';
import Contact from 'components/contact/Contact';
import Proiecte from 'components/proiecte/Proiecte';
import Tarife from 'components/tarife/Tarife';
import Echipa from 'components/echipa/Echipa';
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
      <Separator>
        <CeTratam />
      </Separator>
      <Separator>
        <Echipa />
      </Separator>
      <Separator>
        <Tarife />
      </Separator>
    </Fragment>
  );
};

export default HomePage;