import React, { useState, createContext } from 'react'

export const AppContext = createContext();

export const AppProvider = props => {
    const [sidebarClosed, setSidebarClosed] = useState(true);
    return (
        <AppContext.Provider value={[sidebarClosed, setSidebarClosed]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
