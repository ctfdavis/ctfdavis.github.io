import React, {useContext} from 'react';
import {AppContext} from './AppContext';

const SidebarBlanket = () => {

    const [sidebarClosed, setSidebarClosed] = useContext(AppContext);

    const sidebarClose = () => {
        setSidebarClosed(true);
    }

    return (
        <div className={sidebarClosed ? "" : "sidebar__blanket"} onClick={sidebarClose}>
        </div>
    )
}

export default SidebarBlanket;
