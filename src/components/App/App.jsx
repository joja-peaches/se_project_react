import { useState } from 'react';

import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import ModalWithForm from './ModalWithForm/ModalWithForm';

function App() {
  const [weatherData, setWeatherData] = useState({ type: 'hot' });

  return (
    <div className='page'>
      <ModalWithForm />
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        <Main weatherData={weatherData} />
        <Main weatherData={weatherData} />
      </div>
      
    </div>
  );
}

export default App
