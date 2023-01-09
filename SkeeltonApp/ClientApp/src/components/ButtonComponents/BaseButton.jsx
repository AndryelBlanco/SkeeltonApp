import React, { useEffect, useState } from 'react';
import './BaseButton.scss';

const BaseButton = ({ title, color, classes, item, settings }) => {
  
  const [buttonColor, setButtonColor] = useState({
    isGradient: false,
    color: 'red',
    gradient: null,
  });

  useEffect(() => {

  }, [])


  return (
    <button className={`base-button  hover-button ${classes}`} 
      style={{
        height: item.height, 
        background: settings.backgroundColor,
        color: settings.textColor,
      }}
    >
      {settings.text != '' ? settings.text : title}
    </button>
  )
}

export default BaseButton