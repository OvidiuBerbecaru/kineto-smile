import React, { forwardRef } from 'react';
import Tarif from 'components/tarife/Tarif';

const tarifeSet1 = [
  {
    title: 'Consultatie Medic Specialist',
    service: ['Recuperare Medicala - 235lei', 'Evaluare Initiala - 150lei'],
  },
  {
    title: 'Kinetoterapie',
    service: ['1 sedinta(40 minute) - 135lei', 'Abonament 10 sedinte - 990lei'],
  },
  {
    title: 'Terapie Manuala(stretching, vojta)',
    service: ['1 sedinta - 145lei', 'Abonament 10 sedinte/luna - 1250lei'],
  },
  {
    title: 'Gimnastica de Intretinere',
    service: ['1 sedinta - 85lei'],
  },
];

const tarifeSet2 = [
  {
    title: 'Hidrokinetoterapie In Apa Ionizata',
    service: ['1 sedinta - 100lei', 'Abonament 10 sedinte/luna - 900lei'],
  },
  {
    title: 'Mesaj Terapeutic',
    service: ['1 sedinta(45 minute) - 125lei', 'Abonament 10 sedinte/luna - 950lei'],
  },
  {
    title: 'Deep Tissue Massage',
    service: ['Segmentar(55 minute) - 100lei', 'Complet(90 minute) - 135lei'],
  },
  {
    title: 'Medical Taping Concept',
    service: ['Aplicatie - 75lei'],
  },
];

const Tarife = forwardRef((props, ref) => {
  return (
    <div className="container tarife" ref={ref}>
      <div className="row">
        <div className="col-md-6">
          {tarifeSet1.map(tarif => <Tarif title={tarif.title} services={tarif.service} />)}
        </div>
        <div className="col-md-6">
          {tarifeSet2.map(tarif => <Tarif title={tarif.title} services={tarif.service} />)}
        </div>
      </div>
    </div>
  );
});

export default Tarife;