import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import NotesPage from './pages/NotesPage/NotesPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/notes">
          <NotesPage />
        </Route>
      </Switch>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
