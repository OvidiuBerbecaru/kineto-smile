import HomePage from 'components/homePage/HomePage';
import DespreNoi from 'components/despreNoi/DespreNoi';
import Tarife from 'components/tarife/Tarife';
import Contact from 'components/contact/Contact';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/despre-noi',
    component: DespreNoi,
  },
  {
    path: '/tarife',
    component: Tarife,
  },
  {
    path: '/contact',
    component: Contact,
  },
];