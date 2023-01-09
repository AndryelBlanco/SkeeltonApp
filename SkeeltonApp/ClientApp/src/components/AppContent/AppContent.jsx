import React from 'react';

import './appContent.scss';
import mockupData from '../mockups/itens';

import CardExpander from '../CardExpander/CardExpander';
import PreviewContainer from '../PreviewContent/PreviewContainer/PreviewContainer';

//To get id use match.params.id
const AppContent = ({ match }) => {
  const [pageComponents, setPageComponents] = React.useState();
  

  
  return (
   
      <main className='app-content'>
        <div className='components-container'>
          <CardExpander cardTitle={"Buttons"} cardData={mockupData.buttons}/>
        </div>
        <PreviewContainer />
      </main>
  )
}

export default AppContent