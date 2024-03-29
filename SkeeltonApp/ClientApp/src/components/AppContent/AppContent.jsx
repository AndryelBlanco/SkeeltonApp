import React, { useContext } from 'react';
import { AppDataContext } from '../../context/AppDataContext';

import './appContent.scss';
import {mockupData} from '../mockups/itens';

import CardExpander from '../CardExpander/CardExpander';
import PreviewContainer from '../PreviewContent/PreviewContainer/PreviewContainer';

//To get id use match.params.id
const AppContent = ({ match }) => {
  
  return (
   
      <main className='app-content'>
        <div className='components-container'>
          <CardExpander cardTitle={"Bio"} cardData={[]}/>
          <CardExpander cardTitle={"Buttons"} cardData={mockupData.buttons}/>
        </div>
        <PreviewContainer />
      </main>
  )
}

export default AppContent