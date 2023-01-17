import React from 'react';
import ButtonsSortable from '../components/ButtonsSortable';

import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { AppDataContext } from '../../../context/AppDataContext';

import './PreviewContainer.scss';

const PreviewContainer = () => {
  const { pageComponents, setPageComponents } = React.useContext(AppDataContext);

  const [previewComponents, setPreviewComponents] = React.useState([]);
  const [previewPageStyles, setPreviewPageStyles] = React.useState(null);

  React.useEffect(() => {

    let ComponentsCopy = JSON.parse(JSON.stringify(pageComponents.Components));
    if(ComponentsCopy.length > 0)
      setPreviewComponents([...ComponentsCopy]);
    
    if(pageComponents.PageStyle)
      setPreviewPageStyles(pageComponents.PageStyle);
    

  }, [pageComponents]);

  function handleDragEvent(result){
    const {active, over} = result;
    console.log("RESULT", result)
    if(active.id !== over.id){
      setPreviewComponents((previewComponents) => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex = over.data.current.sortable.index;
        console.log("ACTIVE INDEX", activeIndex);
        console.log("OVER INDEX", overIndex);
        return arrayMove(previewComponents, activeIndex, overIndex);
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
          <SortableContext
            items={previewComponents}
            strategy={verticalListSortingStrategy}
          >
            { previewComponents.length > 0 && 
              <>
                {previewComponents.map(item => {
                  return (
                    <ButtonsSortable key={item.id} item={item} />
                  );
                })}
              </>
            }
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}

export default PreviewContainer