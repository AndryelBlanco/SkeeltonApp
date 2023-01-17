import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Button, FormGroup, Input, Label, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';
import { AppDataContext } from '../../context/AppDataContext';
import { HiOutlineCog6Tooth } from "react-icons/hi2";

import BaseButton from '../ButtonComponents/BaseButton';
import uuid from 'react-uuid';

import './cardExpander.scss';

const CardExpander = ({ cardTitle, cardData }) => {

  const { pageComponents, setPageComponents } = useContext(AppDataContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const [buttonSettings, setButtonSettings] = useState({
    template: '',
    backgroundColor: '',
    textColor: '',
    text: '',
    href: '',
    id: `BTN_${uuid()}`
  }); 

  // useEffect(() => {
  //   console.log(`buttonSettings`, buttonSettings);
  // }, [buttonSettings])
  

  function handleClick(){
    setIsExpanded(!isExpanded);
  }

  function resetButtonSettings(){
    setButtonSettings({
      template: '',
      backgroundColor: '',
      textColor: '',
      text: '',
      href: '',
      id: `BTN_${uuid()}`
    });
  }

  function handleAddButton(buttonType){
    buttonSettings.template = buttonType;
    switch(buttonType){
      case 'Flat':
        setPageComponents( prevState => ({
          ...prevState,
          Components: [
            ...prevState.Components,
            buttonSettings
          ]
        }));
        resetButtonSettings();
        break;
    }
  }

  function buttonSettingsPopover(item, buttonType){
    return (
      <UncontrolledPopover
        flip
        target={`btn-${item.id}`}
        placement="right"
        trigger="click"
        offset='0 8'
      >
        <PopoverHeader>
          {item.title} Button Settings
        </PopoverHeader>
        <PopoverBody>
          <FormGroup>
            <Label for="flat-background">
              Background Color
            </Label>
            <Input
              id="flat-background"
              name="background-color"
              placeholder="background-color"
              type="color"
              value={buttonSettings.backgroundColor}
              onChange={(e) => setButtonSettings({...buttonSettings, backgroundColor: e.target.value})}
            />
          </FormGroup>
          <FormGroup className='mt-2'>
            <Label for="flat-text-color">
              Text Color
            </Label>
            <Input
              id="flat-text-color"
              name="flat-text-color"
              placeholder="flat-text-color"
              type="color"
              value={buttonSettings.textColor}
              onChange={(e) => setButtonSettings({...buttonSettings, textColor: e.target.value})}
            />
          </FormGroup>
          <FormGroup className='mt-2'>
            <Label for="flat-text">
              Button Text
            </Label>
            <Input
              id="flat-text"
              name="text"
              type="text"
              placeholder="Max 30 characters"
              maxlength="45"
              value={buttonSettings.text}
              onChange={(e) => setButtonSettings({...buttonSettings, text: e.target.value})}
            />
          </FormGroup>
          <FormGroup className='mt-2'>
            <Label for="flat-link">
              Button link
            </Label>
            <Input
              id="flat-link"
              name="link"
              type="text"
              placeholder="ex: https://google.com"
              value={buttonSettings.href}
              onChange={(e) => setButtonSettings({...buttonSettings, href: e.target.value})}
            />
          </FormGroup>
          <div className='d-flex justify-content-end'>
            <Button className='mt-3 btn-success' variant="success" onClick={() => handleAddButton('Flat')}>Add</Button>
          </div>
        </PopoverBody>
      </UncontrolledPopover>
    );
  }

  return (
    <div className={isExpanded ? 'card-expanded card-base' : 'card-base'} >
      <div className={isExpanded ? 'card-header card-header-line' : 'card-header'} onClick={handleClick}>
        <h1 className='card-title'>{cardTitle}</h1>
        {
          isExpanded 
          ?
            <AiOutlineMinus size={28} color="#ffffff"/>
          :
            <AiOutlinePlus size={28} color="#ffffff"/>
        }
      </div>
      {isExpanded ? 
        <div className={isExpanded ? 'card-content visible' : 'card-content hidden'}>
          {cardData.map((item) => {
            switch(item.id){
              case 'BTN1':
                return(
                  <div className='component-row'>
                    <BaseButton 
                      key={item.id}
                      title={item.title}
                      settings={buttonSettings}
                      item={item}
                      classes={item.classes}
                      color={buttonSettings.backgroundColor}
                      // click={handleBaseButtonClick}
                    />
                    <button className='popover-changer' id={`btn-${item.id}`} type="button">
                      <HiOutlineCog6Tooth size={32} color={"#A3A3A3"}/>
                    </button>
                    {buttonSettingsPopover(item, 'flat')}
                  </div>
                )
              // case 'BTN2':
              //   return(
              //     <h1>oi</h1>
              //   )
              // case 'BTN3':
              //   return(
              //     <h1>BTN3</h1>
              //   )
            }
          })}
        </div>
        :
        null
      }
    </div>
  )
}

export default CardExpander