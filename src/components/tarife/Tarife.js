import React from 'react';
import Tarif from 'components/tarife/Tarif';

const tarife = [
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
    service: ['1 sedinta', 'Abonament 10 sedinte/luna - 1250lei'],
  },
  {
    title: 'Gimnastica de Intretinere',
    service: ['1 sedinta - 85lei'],
  },
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

const Tarife = () => {
  return (
    <div>
      {tarife.map(tarif => <Tarif title={tarif.title} services={tarif.service} />)}
    </div>
  );
};

export default Tarife;