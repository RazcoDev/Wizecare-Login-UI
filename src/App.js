import React from 'react';
import './css/App.css';
import FormSectionComponent from './components/formSection.comp'
import InfoSectionComponent from './components/infoSection.comp'

function App() {
  return (

      <div className="Bg-container">
        <div className="Main-container">
            <FormSectionComponent/>
            <InfoSectionComponent/>
        </div>
      </div>
  );
}

export default App;
