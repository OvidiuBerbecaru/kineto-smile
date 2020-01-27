import React, { Fragment } from 'react';
import TeamImg from 'assets/team-homepage.png';

const descriptionText = 'Cabinetul de kinetoprofilaxie si kinetoterapie Kineto Smile ofera servicii de kinetoterapie (tratarea sistemului osteo-neuro-musculo-articular cu ajutorul exercitiilor fizice) precum si kinetoprofilaxie (exercitii personalizate pentru imbunatatirea capacitatii de efort,pentru preventia unor boli profesionale ce vizeaza sistemul musculoscheletal sau pentru adaptarea organismului la un efort specificsezonier sau la practicarea unui sport).';

const HomePageIntro = () => {
  return (
    <Fragment>
      <div className="homepage-intro container-fluid text-white">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12">
                <h1>KINETO SMILE</h1>
                <div className="intro-separator mt-4" />
                <p className="mt-4">
                  {descriptionText}
                </p>
              </div>
              <div className="col-md-7 intro-image">
                <img src={TeamImg} alt="team" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageIntro;