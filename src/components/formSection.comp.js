import React from 'react';
import '../css/App.css';
import RegisterComponent from './register.comp'
import Form from './form.comp'


function FormSectionComponent() {
    return (
        <div className='Form-section'>
            <RegisterComponent/>
            <Form/>
        </div>
    );
}

export default FormSectionComponent;
