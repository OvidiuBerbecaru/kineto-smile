import React, { Fragment, useRef } from 'react';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import CeTratam from 'components/homePage/CeTratam';
import Contact from 'components/contact/Contact';
import Proiecte from 'components/proiecte/Proiecte';
import Tarife from 'components/tarife/Tarife';
import Echipa from 'components/echipa/Echipa';
import Separator from 'components/shared/Separator';
import DespreNoi from 'components/despreNoi/DespreNoi';
import GoToTop from 'components/shared/GoToTop';
import HomePageIntro from './HomePageIntro';

const HomePage = () => {
  const despreNoiRef = useRef(null);
  const echipaRef = useRef(null);
  const contactRef = useRef(null);
  const proiecteRef = useRef(null);
  const tarifeRef = useRef(null);

  return (
    <Fragment>
      <Header echipaRef={echipaRef} despreNoiRef={despreNoiRef} contactRef={contactRef} proiecteRef={proiecteRef} tarifeRef={tarifeRef} />
      <GoToTop />
      <HomePageIntro />
      <Separator text="ce tratam ?" boxShadow="0 -15px 15px rgba(0,0,0,0.19), 0 -10px 6px rgba(0,0,0,0.23)" />
      <div className="container-fluid">
        <div style={{ paddingTop: '200px' }} />
        <CeTratam />
        <div style={{ paddingBottom: '200px' }} />
      </div>
      <Separator text="despre noi" boxShadow="0 -15px 15px rgba(0,0,0,0.19), 0 -10px 6px rgba(0,0,0,0.23)" />
      <div className="container-fluid">
        <DespreNoi ref={despreNoiRef} />
      </div>
      <Separator text="echipa" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0 0 0" />
      <div className="container-fluid">
        <Echipa ref={echipaRef} />
      </div>
      <Separator text="proiecte" boxShadow="0 -15px 15px rgba(0,0,0,0.19), 0 -10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0 0 0" />
      <div className="container-fluid">
        <Proiecte ref={proiecteRef} />
      </div>
      <Separator text="tarife" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="0 0 7rem 0" />
      <Tarife ref={tarifeRef} />
      <Separator text="contact" boxShadow="0 15px 15px rgba(0,0,0,0.19), 0 10px 6px rgba(0,0,0,0.23)" separatorMargin="7rem 0" />
      <Contact ref={contactRef} />
      <Footer />
    </Fragment>
  );
};

export default HomePage;