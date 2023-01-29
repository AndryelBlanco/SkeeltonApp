import React, { useEffect, useState } from 'react';
import './BaseButton.scss';

const BaseButton = ({ item }) => {
  

  return (
    <button className={`base-button  hover-button ${item.template == 'Flat' ? "flat-base": item.template == 'Gradient' ? "gradient-base" : "bordered-base"} ${item.backgroundColor}`} 
      style={item.template != 'Outline' ? {
        height: 56, 
        background: item.backgroundColor,
        color: item.textColor,
      } : {
        height: 56, 
        color: item.textColor,
        background: "none",
        border: `2.5px solid ${item.backgroundColor}`
      }}
    >
      {item.text != '' ? item.text : `${item.template} Button`}
    </button>
  )
}

export default BaseButton