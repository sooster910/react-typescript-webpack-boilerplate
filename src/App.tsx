import React from 'react';
import './styles.css'
import image from './final_profile.png'
import injectionSvg from './injection.svg'
import {ClickCounter} from './ClickCouter'
export const App = () => {
    return (
      <>
            <h1>React Typescript hihi</h1>
        <img src={image} alt="react logo" width="200" height="300"></img>
        <img src={injectionSvg} alt="react logo"></img>
        <ClickCounter />
      </>
    );
}