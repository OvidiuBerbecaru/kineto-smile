import React, { Fragment, forwardRef } from 'react';
import ivakinetic from 'assets/ivakinetic.jpg';
import kinetodidactica from 'assets/kinetodidactica.jpg';

const despreNoiData = [
  {
    timestamp: '15 Februarie 2014',
    desc: [
      'Cabinetul Kineto Smile s-a nascut pe 15 februarie 2014 intr-o iarna cu oameni de zapada si rosu in obrajii copiilor. In aceasta zi am semnat contractul de inchiriere pentru spatiul Kineto Smile si visul a inceput sa prinda contur.',
      'De cand am terminat facultatea imi doream un spatiu al meu in care sa fac kinetoterapie la cel mai inalt nivel impreuna cu oameni dedicati acestei profesii,oameni care sa iubeasca oamenii, sa ii respecte si sa faca tot ceea ce stiu mai bine pentru ei. Acest vis a crescut insa in inima mea timp de 15 ani timp in care m-am perfectionat si am lucrat la Spitalul Universitar de Urgenta Bucuresti.',
      'Visul a devenit realitate in acea zi de iarna iar apoi s-a transformat cumva...in zambete. Au inceput sa vina pacienti care dupa fiecare sedinta plecau acasa cu un zambet pe fata si de fiecare data reveneau si mai zambitori. Bucuria din ochii copiilor si imbratisarile lor m-au incurajat sa merg mai departe.',
    ],
  },
  {
    timestamp: '2015 - Radu Voica',
    desc: [
      'Pacientii erau tot mai multi si aveam nevoie de o echipa. In 2015 la cabinet a apparut Radu Voica, pe atunci student la kinetoterapie care dorea sa faca practica la cabinet. Mi-a placut ceva la el, dincolo de cunostintele pe care le acumula cu repeziciune, dragul de oameni si de aceasta meseria, dorinta de a invata si a se perfectiona, de a fi mereu mai bun. Dupa ce a terminat facultatea Radu a decis sa ramana alaturi de kineto Smile si de toate proiectele dezvoltate.',
    ],
  },
  {
    timestamp: '2017 - Daniel Pandele',
    desc: [
      'In 2017 vine la cabinet Daniel Pandele, care asigura serviciile de masaj ale cabinetului. Daniel este dedicat profesiei, iubeste oamenii si doreste sa le vina in ajutor prin metode avansate de aplicare a masajului terapeutic. Daniel are experimenta in acest domeniu si studiaza permanent.',
    ],
  },
  {
    timestamp: 'Parteneri',
  },
];

const DespreNoi = forwardRef((props, ref) => {
  return (
    <div className="container despre-noi" ref={ref}>
      <div className="row justify-content-center flex-column align-items-center mt-5">
        {
          despreNoiData.map(({ timestamp, desc }) => (
            <Fragment>
              <div className="time-period d-flex flex-column align-items-center mt-5">
                <p className="timestamp mb-4">{timestamp}</p>
                {
                  desc ? desc.map(paragraph => (<p className="desc">{paragraph}</p>)) : null
                }
              </div>
            </Fragment>
          ))
        }
        <div className="w-100 d-flex justify-content-around align-items-center flex-wrap">
          <a href="https://www.facebook.com/ivakinetic/">
            <img src={ivakinetic} alt="ivakinetic" style={{ height: '11rem', cursor: 'pointer' }} />
          </a>
          <a href="https://www.kinetodidactica.ro/">
            <img src={kinetodidactica} alt="kinetodidactica" style={{ height: '7rem', cursor: 'pointer' }} />
          </a>
        </div>
      </div>
    </div>
  );
});

export default DespreNoi;