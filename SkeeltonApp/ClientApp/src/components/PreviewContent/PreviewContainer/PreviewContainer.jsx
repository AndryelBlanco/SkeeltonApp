import React from 'react';
import ButtonsSortable from '../components/ButtonsSortable';

import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';

const PreviewContainer = () => {

  const [pageComponents, setPageComponents] = React.useState(["FLAT BUTTON", "GRADIENT BUTTON", "BORDERED BUTTON"]);

  function handleDragEvent(result){
    const {active, over} = result;
    
    if(active.id !== over.id){
      setPageComponents((pageComponents) => {
        const activeIndex = pageComponents.indexOf(active.id);
        const overIndex = pageComponents.indexOf(over.id);

        return arrayMove(pageComponents, activeIndex, overIndex);
      });
    }
  }

  return (
    <div className='preview-container'>
      <div className='mockup'>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEvent}
        >
          <h3>Available Buttons</h3>
          <SortableContext
            items={pageComponents}
            strategy={verticalListSortingStrategy}
          >
            {pageComponents.map(item => <ButtonsSortable key={item} id={item} />)}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}

export default PreviewContainer