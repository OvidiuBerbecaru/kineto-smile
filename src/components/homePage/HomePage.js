import React, { Fragment } from 'react';
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
      <div className="container-fluid">
        <DespreNoi />
      </div>
      <Separator text="echipa" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0 0 0" />
      <div className="container-fluid">
        <Echipa />
      </div>
      <Separator text="proiecte" boxShadow="0 -15px 15px rgba(0,0,0,0.19), 0 -10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0 0 0" />
      <div className="container-fluid">
        <Proiecte />
      </div>
      <Separator text="tarife" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="0 0 7rem 0" />
      <Tarife />
      <Separator text="contact" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0" />
      <Contact />
    </Fragment>
  );
};

export default HomePage;