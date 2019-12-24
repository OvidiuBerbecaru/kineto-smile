import React from 'react';
import Lucica from 'assets/lucica.png';
import Daniel from 'assets/daniel.png';
import Radu from 'assets/radu.png';
import Medic from 'components/echipa/Medic';

const medicsData = [
  {
    name: 'Lucica Nedelcu',
    image: Lucica,
    specialization: 'Profesor Kinetoterapeut principal, fondator Kineto Smile.',
    quote: '“Iubesc oamenii si imi doresc sa ii ajut sa se bucure de viata fara durere. Cred ca miscarea este viata si una dintre metodele prin care putem sa ne armonizam mintea, inima si corpulpentru o sanatate perfecta. Ma bucur enorm cand oamenii cu care lucrez invata din experienta pe care o au la cabinet, sa isi asculte si sa isi inteleaga corpul si semnalele pe care acesta le transmite, invata sa isi respecte corpul si sa faca miscare, reusesc sa introduca miscarea in viata lorsi isi cresc astfel bucuria si calitatea vietii.”',
    description: 'In anul 1998 Lucica a absolvit facultatea de kinetoterapie din cadrul Academiei Nationale de Educatie Fizica si Sport. Pana in decembrie 2018 a profesat la Spitalul Universitar de Urgenta Bucuresti. Din anul 2014, lucreaza la cabinetul de kinetoterapie Kineto Smile. Aici a demarat impreuna cu echipa cateva prroiecte de preventie prin evaluare si informare, a investit timp, drag si calitate in toate proiectele create in cadrul cabinetului si in afara acestuia, venind in intampinarea nevoilor societatii, incercand sa imbunatateasca calitatea vietii. La cabinet, Lucica lucreaza cu nou-nascuti, copii, adolescenti si adulti, evalueaza pacientii, creaza programe de kinetoterapie individualizatein functie de patologie si de aspectele descoperite dupa evaluarea musculo-scheletala prealabila si realizeaza planul terapeutic. De asemenea Lucica realizeaza programe de pregatire in vederea practicarii de sporturi diverse cu scopul evitarii accidentarilor si tonifierii musculaturii adecvate in functie de sportul practicat.',
  },
  {
    name: 'Daniel Pandele',
    image: Daniel,
    specialization: 'Maseor',
    quote: '“Intotdeauna deschis catre noi tehnici si abordari, imi las mintea limpede atunci cand sunt inconjurat de profesionistii in domeniu. Cea mai mare satisfactie si motivatie o am in momentul in care oamenii pe care am reusit sa ii ajut, revin cu placere la o noua sedinta de terapie, asa cum imi place sa o numesc.”',
    description: 'Daniel este specializat in arta masajului somatic din anul 2011. Este pasionat de lucrul cu oamenii si din dorinta de a trata problemele tesutului musculo-ligamentar sau patologii musculo-tendinoase si-a perfectionat continuu stilul de a efectua masajul terapeutic, combinand tehnici si metode vechi si noi, imbinand stimularea cu relaxarea si decontracturarea astfel incat efectul sa fie rapid, evident si cuantificabil. Daniel participa cu drag la proiectele kineto Smile si colaboreaza cu medicul si echipa de kinetoterapeuti in vederea tratarii holistice a pacientilor si pentru atingerea obiectivelor terapeutice.',
  },
  {
    name: 'Radu Ioan Voica',
    image: Radu,
    specialization: 'Kinetoterapeut',
    quote: '',
    description: 'Radu a absolvit facultatea de kinetoterapie din cadrul Universitatii Nationale de Educatie Fizica si Sport in anul 2018 si de doi ani este in practica la cabinetul de Kinetoterapie kineto Smile. Perseverent si atent la nevoile pacientilor, Radu doreste sa isi imbunatateasca in permanenta cunostintele, fiind implicat in toate proiectele desfasurate la cabinet. Unul dintre proiecte este ”Un exercitiu pe zi la birou”, unde Radu prezinta exercitiile in cadrul proiectului; alt proiect este “Preventia afectiunilor coloanei vertebrale pentru elevi”, unde Radu lucreaza in mod direct cu elevii din scoli prin informare, constientizare si jocri interactive. In cadrul cabinetului de kinetoterapie kineto Smile, Radu a participat la seminariile: ”Introducere in metoda Feldenkrais”, ”Introducere in reeducare posturala globala, metoda Souchard si a absolvit cursul ”Conceptul Medical de Bandajare Neuromusculara” precum si cursul de terapie manuala in cadrul OMTRO.',
  },

];

const Echipa = () => {
  return (
    <div className="container">
      <div className="row justify-content-around">
        {
          medicsData.map(({
            name, image, specialization, quote, description,
          }) => (<Medic name={name} image={image} specialization={specialization} quote={quote} description={description} />))
        }
      </div>
    </div>
  );
};

export default Echipa;