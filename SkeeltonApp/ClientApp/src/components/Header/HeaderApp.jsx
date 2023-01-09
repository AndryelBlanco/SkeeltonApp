import React from 'react';
import './header.scss';
import appLogo from '../../assets/Logo.svg';
import { BsPersonCircle } from "react-icons/bs";

export default function HeaderApp (){
  return (
    <header>
      <img src={appLogo} alt="SkeeltonApp logo"/>
      <BsPersonCircle size={28} color={"#ffffff"} className="profile-settings"/>
    </header>
  )
}

