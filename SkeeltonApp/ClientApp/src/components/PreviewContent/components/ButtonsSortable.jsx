import React from 'react';

import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import './ButtonsSortable.scss';

const ButtonsSortable = ({item}) => {
  
  React.useEffect(() => console.log("ITEM", item), [item])

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: "flex",
    alignItems: "center",

    width: "100%",
    padding: "0.8rem"
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={{...style}} >
      <a style={{color: item.textColor, backgroundColor: item.backgroundColor}} className='base-button-preview hover-button'>
        {item.text}  
      </a>
    </div>
  )
}

export default ButtonsSortable