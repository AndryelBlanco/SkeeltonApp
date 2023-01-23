import React from 'react';
import './GradientBox.scss';

const GradientBox = ({colorScheme, changeColorScheme}) => {
  

  return (
    <div className={`gradient-box ${colorScheme}`} onClick={() => changeColorScheme(colorScheme)}>
    </div>
  )
}

export default GradientBox