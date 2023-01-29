import React, { useContext } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import './BaseBio.scss';
import { Uploader } from "uploader";
import { UploadButton } from 'react-uploader';
import { AppDataContext } from '../../context/AppDataContext';

const BaseBio = () => {
  const { pageComponents, setPageComponents } = useContext(AppDataContext);

  const uploader = Uploader({
    apiKey: "free"
  });

  const uploaderOptions = {
    multi: false,
    styles: {
      colors: {
        primary: "#377dff"
      }
    }
  }


  return (
    <div className=''>
      <FormGroup>
        <Label htmlFor='user-nickname'>Nickname</Label>
        <Input 
          id='user-nickname'
          className='input-base w-50 mt-2'
          placeholder='@yournick'
          maxLength='22'
          type="text"
          value={pageComponents.Bio.nickname}
          onChange={(e) => setPageComponents( prevState => ({
            ...prevState,
            Bio: {
              ...prevState.Bio,
              nickname:e.target.value,
            }
          }))}
        />
      </FormGroup>
      <FormGroup className='mt-4'>
        <Label htmlFor='user-nickname'>Avatar URL</Label>
        <Input 
          id='user-nickname'
          className='input-base w-50 mt-2'
          placeholder='https://youravatarurl.com'
          type="text"
          value={pageComponents.Bio.avatarURL}
          onChange={(e) => setPageComponents( prevState => ({
            ...prevState,
            Bio: {
              ...prevState.Bio,
              avatarURL:e.target.value,
            }
          }))}
        />
      </FormGroup>
      <FormGroup className='mt-4'>
        <Label>Upload Avatar</Label><br/>
        <UploadButton uploader={uploader}
                options={uploaderOptions}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
          {({onClick}) =>
            <button onClick={onClick}>
              Upload a file...
            </button>
          }
        </UploadButton>
      </FormGroup>
    </div>
  )
}

export default BaseBio