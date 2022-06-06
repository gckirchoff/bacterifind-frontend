import React, { useRef, useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import { Switch, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import NotesPage from './pages/NotesPage/NotesPage';
import { Provider } from 'react-redux';
import { store } from './state';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    return () => {
      setFirstRender(false);
      console.log(firstRender);
    };
  });

  return (
    <Provider store={store}>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <MainPage firstRender={firstRender} />
          </Route>
          <Route path="/notes">
            <NotesPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </Provider>
  );
};

export default App;
