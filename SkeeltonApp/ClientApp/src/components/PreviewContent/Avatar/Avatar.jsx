import React from 'react';
import './Avatar.scss';
import { AppDataContext } from '../../../context/AppDataContext';

const Avatar = () => {
  const { pageComponents, setPageComponents } = React.useContext(AppDataContext);

  return (
    <div className='avatar-container'>
      <img 
        className='avatar-photo'
        src={pageComponents.Bio.avatarURL} 
        style={{
          width: '120px',
          height: '120px'
        }}
      />
      <h5 className='mt-3'>
        @{pageComponents.Bio.nickname != '' ? pageComponents.Bio.nickname : 'Your Nickname'}
      </h5>
    </div>
  )
}

export default Avatar