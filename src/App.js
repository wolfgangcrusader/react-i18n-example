import {useTranslation} from 'react-i18next';
import { useState } from 'react';

function App() {

  const {i18n, t} = useTranslation();

  const [language, setLanguage] = useState('en');

  const Translate =(e) => {   
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  
  return (
    <>
    <button value="en" onClick={Translate}>ENGLISH</button>
    <button value="mao" onClick={Translate}>MAORI</button>
    <h1>{t('headertexts')}</h1>
    <h1>{t('WelcomeText')}</h1>     
    </>
  );
}

export default App;
