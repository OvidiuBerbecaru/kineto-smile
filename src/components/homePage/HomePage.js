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
      <Separator text="despre noi" boxShadow="0 -15px 15px rgba(0,0,0,0.19), 0 -10px 6px rgba(0,0,0,0.23)" />
      <DespreNoi />
      <Separator text="echipa" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0 0 0" />
      <Echipa />
      <Separator text="proiecte" boxShadow="0 -15px 15px rgba(0,0,0,0.19), 0 -10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0 0 0" bgColor="linear-gradient(90deg, rgba(79,187,240,1) 0%, rgba(102,234,187,1) 100%)" />
      <Proiecte />
      <Separator text="tarife" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="0 0 7rem 0" bgColor="linear-gradient(90deg, rgba(79,187,240,1) 0%, rgba(102,234,187,1) 100%)" />
      <Tarife />
      <Separator text="contact" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0" />
      <Contact />
    </Fragment>
  );
};

export default HomePage;