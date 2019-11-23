import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { routes } from 'routes';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {
          routes.map((route) => <Route key={route.path} exact path={route.path} component={route.component} />)
        }
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
