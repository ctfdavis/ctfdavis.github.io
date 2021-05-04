import React, { useState, createContext } from 'react'

export const AppContext = createContext();

export const AppProvider = props => {
    const [sidebarClosed, setSidebarClosed] = useState(true);
    const [language, setLanguage] = useState('en');
    return (
        <AppContext.Provider value={[sidebarClosed, setSidebarClosed, language, setLanguage]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
