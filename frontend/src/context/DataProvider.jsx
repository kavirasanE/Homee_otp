import React, { createContext, useEffect, useState } from 'react'

export const DataContext =createContext();

const DataProvider = ({children}) => {
    const [contextData,setcontextData]  =useState([]);
    const [magazineId,setmagazineId]  =useState([]);


    useEffect(() => {
        console.log(contextData);
        console.log(magazineId);
    },[contextData,magazineId])

  return (
    <DataContext.Provider value={{setcontextData,setmagazineId ,magazineId,contextData}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider