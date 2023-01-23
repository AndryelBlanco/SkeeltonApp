import React, { useEffect, useState } from 'react';
import './BaseButton.scss';

const BaseButton = ({ item }) => {
  

  return (
    <button className={`base-button  hover-button ${item.template == 'Flat' ? "flat-base": item.template == 'Gradient' ? "gradient-base" : "bordered-base"} ${item.backgroundColor}`} 
      style={{
        height: 56, 
        background: item.backgroundColor,
        color: item.textColor,
      }}
    >
      {item.text != '' ? item.text : `${item.template} Button`}
    </button>
  )
}

export default BaseButton