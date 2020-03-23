import React from 'react';
import '../css/App.css';

function BlockComponent(props) {
    return (
        <div className='Block Flex-comp'>
            <img src={props.image} />
            <p> {props.text} </p>
        </div>
    );
}

export default BlockComponent;
