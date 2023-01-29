import React, { createContext, useEffect, useState } from 'react';


export const AppDataContext = createContext({});


function AppDataProvider({children}){

  const [pageComponents, setPageComponents] = React.useState({
    id: '',
    Bio: {
      nickname: '',
      avatarURL: '',
    },
    PageStyle: {
      background: {
        gradient: false,
        gradientPreset: '',
        image: false,
        imageLink: '',
        singleColor: '#ffea00'
      },
    },
    Components: []
  });

  useEffect(() => {
    console.log("PAGE COMP", pageComponents)
  }, [pageComponents])

  return (
    <AppDataContext.Provider value={{pageComponents, setPageComponents}}>
      {children}
    </AppDataContext.Provider>
  )
}

export default AppDataProvider;