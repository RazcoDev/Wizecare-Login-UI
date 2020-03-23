import React from 'react';
import '../css/App.css';
import wizecareLogo from '../images/wizecare-white.png'
import arrowIcon from '../images/login/back-white.png'


function FormComponent() {
    const passwordInfo = 'Your password must be at least 8 characters'
    const agreeText = 'I agree to Wizecares Terms & Conditions'
    return (
        <div className='Form-comp Flex-comp'>
            <img src={wizecareLogo} className="Logo" alt="logo" />
            <form className='Sign-form Flex-comp'>
               <input type="text" placeholder='*Full Name' name="name" />
                <input type="text" placeholder='*Email' name="name" />
                <input type="text" placeholder='Password' name="name" />
                <label>{passwordInfo}</label>
                <div className='Agree-row'>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    <label>{agreeText}</label>
                </div>
                <button type="button" className="Sign-button btn btn-primary btn-default btn-lg">
                    <p>Next
                    <img src={arrowIcon} alt="logo"/>
                    </p>
                </button>

            </form>
        </div>
    );
}

export default FormComponent;
