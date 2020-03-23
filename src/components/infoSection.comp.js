import React from 'react';
import '../css/App.css';
import BlockComponent from './block.comp'
import curve from '../images/login/curve.svg'

import home from '../images/login/home.png'
import man from '../images/login/man.png'
import provider from '../images/login/provider.png'
import secure from '../images/login/secure.png'

function InfoSectionComponent() {
    const tryText = "Try WizeCare to \n" +
        "deliver better health \n" +
        "for you patients"
    return (
        <div className='Info-section'>
            <div className='Curve'>

                <div className='Try-us-container'>
                    <p>{tryText}</p>
                </div>
                <div className='Blocks-section'>
                    <div className=' blocks-container '>
                        <BlockComponent image={home} text='Home personalized care plans'/>
                        <BlockComponent image={man} text='Physical remote monitoring based mobile camera & AI'/>


                    </div>
                    <div className='Flex-comp blocks-container  '>
                        <BlockComponent image={secure} text='Secure Video Sessions'/>
                        <BlockComponent image={provider} text='Provider patient engagement'/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSectionComponent;
