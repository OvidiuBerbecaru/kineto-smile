import React, { Fragment, useRef } from 'react';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Contact from 'components/contact/Contact';
import Proiecte from 'components/proiecte/Proiecte';
import Tarife from 'components/tarife/Tarife';
import Echipa from 'components/echipa/Echipa';
import Separator from 'components/shared/Separator';
import DespreNoi from 'components/despreNoi/DespreNoi';
import HomePageIntro from './HomePageIntro';

const HomePage = () => {
  // const despreNoiRef = useRef(null);
  const echipaRef = useRef(null);

  return (
    <Fragment>
      <Header echipaRef={echipaRef} />
      <HomePageIntro />
      <Separator text="despre noi" boxShadow="0 -15px 15px rgba(0,0,0,0.19), 0 -10px 6px rgba(0,0,0,0.23)" />
      <div className="container-fluid">
        <DespreNoi />
      </div>
      <Separator text="echipa" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0 0 0" />
      <div className="container-fluid">
        <Echipa ref={echipaRef} />
      </div>
      <Separator text="proiecte" boxShadow="0 -15px 15px rgba(0,0,0,0.19), 0 -10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0 0 0" />
      <div className="container-fluid">
        <Proiecte />
      </div>
      <Separator text="tarife" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="0 0 7rem 0" />
      <Tarife />
      <Separator text="contact" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0" />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default HomePage;