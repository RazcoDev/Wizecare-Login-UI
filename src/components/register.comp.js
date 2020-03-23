import React from 'react';
import '../css/App.css';
import arrowIcon from '../images/login/back-white.png'

function RegisterComponent() {
    const registerText = 'Create Your Account';
    return (
        <div className='Register-comp'>
            <a className='Flex-comp' href='#register'>
                <img src={arrowIcon} className="Arrow-icon" alt="logo"/>
                <p className='Register-text'>{registerText}</p>
            </a>
        </div>
    );
}

export default RegisterComponent;
