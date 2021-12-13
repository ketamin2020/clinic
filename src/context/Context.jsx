import React,{createContext} from 'react'
import data from './data'
const CustomContext = createContext(null)
const Context = ({children}) => {
    return (
        <CustomContext.Provider value={data} >{children}</CustomContext.Provider>
    )
}

export {CustomContext,Context};
