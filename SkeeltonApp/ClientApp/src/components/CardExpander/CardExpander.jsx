import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Button, FormGroup, Input, Label, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';
import { AppDataContext } from '../../context/AppDataContext';
import { HiOutlineCog6Tooth } from "react-icons/hi2";

import BaseButton from '../ButtonComponents/BaseButton';
import uuid from 'react-uuid';

import './cardExpander.scss';
import { colorBoxItens } from '../mockups/itens';
import GradientBox from '../GradientBox/GradientBox';

const CardExpander = ({ cardTitle, cardData }) => {

  const { pageComponents, setPageComponents } = useContext(AppDataContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const [flatButtonSettings, setflatButtonSettings] = useState({
    template: "Flat",
    backgroundColor: '',
    textColor: '',
    text: '',
    href: '',
    id: `BTN_${uuid()}`
  }); 

  const [gradientButtonSettings, setGradientButtonSettings] = useState({
    template: 'Gradient',
    backgroundColor: '',
    textColor: '',
    text: '',
    href: '',
    id: `BTN_${uuid()}`
  }); 

  function handleClick(){
    setIsExpanded(!isExpanded);
  }

  function changeGradientScheme(colorScheme){
    setGradientButtonSettings({...gradientButtonSettings, backgroundColor: colorScheme});
  }

  function resetButtonsComponents(){

    setflatButtonSettings({
      template: "Flat",
      backgroundColor: '',
      textColor: '',
      text: '',
      href: '',
      id: `BTN_${uuid()}`
    });

    setGradientButtonSettings({
      template: 'Gradient',
      backgroundColor: '',
      textColor: '',
      text: '',
      href: '',
      id: `BTN_${uuid()}`
    });
  }

  function handleAddButton(buttonType){
    flatButtonSettings.template = buttonType;
    switch(buttonType){
      case 'Flat':
        setPageComponents( prevState => ({
          ...prevState,
          Components: [
            ...prevState.Components,
            flatButtonSettings
          ]
        }));
        resetButtonsComponents();
        break;
      case 'Gradient':
        setPageComponents( prevState => ({
          ...prevState,
          Components: [
            ...prevState.Components,
            gradientButtonSettings
          ]
        }));
        resetButtonsComponents();
        break;
    }
  }

  function flatButtonSettingsPopover(item, buttonType){
    switch(buttonType){
      case 'flat':
        return (
          <UncontrolledPopover
            flip
            target={`btn-${item.id}`}
            placement="right"
            trigger="legacy"
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
                  value={flatButtonSettings.backgroundColor}
                  onChange={(e) => setflatButtonSettings({...flatButtonSettings, backgroundColor: e.target.value})}
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
                  value={flatButtonSettings.textColor}
                  onChange={(e) => setflatButtonSettings({...flatButtonSettings, textColor: e.target.value})}
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
                  value={flatButtonSettings.text}
                  onChange={(e) => setflatButtonSettings({...flatButtonSettings, text: e.target.value})}
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
                  value={flatButtonSettings.href}
                  onChange={(e) => setflatButtonSettings({...flatButtonSettings, href: e.target.value})}
                />
              </FormGroup>
              <div className='d-flex justify-content-end'>
                <Button className='mt-3 btn-success' variant="success" onClick={() => handleAddButton('Flat')}>Add</Button>
              </div>
            </PopoverBody>
          </UncontrolledPopover>
        );
      case 'gradient':
        return (
          <UncontrolledPopover
              flip
              target={`btn-${item.id}`}
              placement="right"
              trigger="legacy"
              offset='0 8'
            >
              <PopoverHeader>
                {item.title} Button Settings
              </PopoverHeader>
              <PopoverBody>
                <FormGroup>
                  <Label for="flat-background">
                    Gradient Color Scheme
                  </Label>
                  <div className='gradient-box-container'>
                    {
                      colorBoxItens.map(color => {
                        return (
                          <GradientBox key={color} colorScheme={color} changeColorScheme={changeGradientScheme} />
                        )
                      })
                    }
                  </div>
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
                    value={gradientButtonSettings.textColor}
                    onChange={(e) => setGradientButtonSettings({...gradientButtonSettings, textColor: e.target.value})}
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
                    value={gradientButtonSettings.text}
                    onChange={(e) => setGradientButtonSettings({...gradientButtonSettings, text: e.target.value})}
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
                    value={gradientButtonSettings.href}
                    onChange={(e) => setGradientButtonSettings({...gradientButtonSettings, href: e.target.value})}
                  />
                </FormGroup>
                <div className='d-flex justify-content-end'>
                  <Button className='mt-3 btn-success' variant="success" onClick={() => handleAddButton('Gradient')}>Add</Button>
                </div>
              </PopoverBody>
            </UncontrolledPopover>
          );
    }
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
            switch(item.template){
              case 'Flat':
                return(
                  <div className='component-row' key={item.id}>
                    <BaseButton 
                      item={flatButtonSettings}
                    />
                    <button className='popover-changer' id={`btn-${item.id}`} type="button">
                      <HiOutlineCog6Tooth size={32} color={"#A3A3A3"}/>
                    </button>
                    {flatButtonSettingsPopover(item, 'flat')}
                  </div>
                )
              case 'Gradient':
                return(
                  <div className='component-row' key={item.id}>
                    <BaseButton 
                      item={gradientButtonSettings}
                    />
                    <button className='popover-changer' id={`btn-${item.id}`} type="button">
                      <HiOutlineCog6Tooth size={32} color={"#A3A3A3"}/>
                    </button>
                    {flatButtonSettingsPopover(item, 'gradient')}
                  </div>
                )
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