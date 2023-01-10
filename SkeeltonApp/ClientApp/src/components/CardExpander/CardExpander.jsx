import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Button, FormGroup, Input, Label, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';
import BaseButton from '../ButtonComponents/BaseButton';
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import './cardExpander.scss';
import { AppDataContext } from '../../context/AppDataContext';

const CardExpander = ({ cardTitle, cardData }) => {

  const { pageComponents, setPageComponents } = useContext(AppDataContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const [flatButtonSettings, setFlatButtonSettings] = useState({
    backgroundColor: '',
    textColor: '',
    text: '',
    href: '',
  }); 

  useEffect(() => {
    console.log(`flatButtonSettigns`, flatButtonSettings);
  }, [flatButtonSettings])
  

  function handleClick(){
    setIsExpanded(!isExpanded);
  }

  function handleBaseButtonClick(){

  }

  function handleAddButton(buttonType){
    switch(buttonType){
      case 'Flat':
        console.log("AANTES", pageComponents);

        setPageComponents( prevState => ({
          ...prevState,
          Components: {
            flatButtonSettings
          }
        }));

        console.log("DPS", pageComponents);
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
              value={flatButtonSettings.backgroundColor}
              onChange={(e) => setFlatButtonSettings({...flatButtonSettings, backgroundColor: e.target.value})}
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
              onChange={(e) => setFlatButtonSettings({...flatButtonSettings, textColor: e.target.value})}
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
              onChange={(e) => setFlatButtonSettings({...flatButtonSettings, text: e.target.value})}
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
              onChange={(e) => setFlatButtonSettings({...flatButtonSettings, href: e.target.value})}
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
                      settings={flatButtonSettings}
                      item={item}
                      classes={item.classes}
                      color={flatButtonSettings.backgroundColor}
                      click={handleBaseButtonClick}
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