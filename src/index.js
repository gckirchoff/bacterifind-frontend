import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tube from './components/Tube/Tube';

const App = () => {
  return (
    <>
      <h1 className="bacterifind-title">Bacterifind</h1>
      <Tube />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
