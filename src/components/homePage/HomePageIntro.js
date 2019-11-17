import React, { Fragment } from 'react';

const descriptionText = 'Consectetur adipiscing elit. Ut convallis ante sit amet risuseleifend, sed tincidunt felis mollis.Ut convallis ante sit amet risuseleifend, sed tincidunt felis mollis.eleifend, sed tincidunt felis mollis.Ut convallis ante sit amet risus';

const HomePageIntro = () => {
  return (
    <Fragment>
      <div className="homepage-intro container-fluid text-white">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <h1>KINETO SMILE</h1>
                <div className="intro-separator mt-4" />
                <p className="mt-4">
                  {descriptionText}
                </p>
              </div>
              <div className="col-md-6 intro-image">
                <p>future image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageIntro;