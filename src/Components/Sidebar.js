import React, {useState, useContext} from 'react';
import {AppContext} from './AppContext';
import logo from '../Images/site_logo.svg';
import sprite from '../Images/sprite.svg';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Sidebar = () => {

    const [sidebarClosed, setSidebarClosed] = useContext(AppContext);

    const sidebarClose = () => {
        setSidebarClosed(true);
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <aside className={sidebarClosed ? "sidebar sidebar--closed" : "sidebar"}>
            <svg className="sidebar__closebtn" onClick={sidebarClose}>
                <use href={sprite + "#icon-x"} />
            </svg>
            <img src={logo} alt="site logo" className="sidebar__logo" />


            <ul className="sidebar__links">
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">Home</a>
                </li>
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">Selected Works</a>
                </li>
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">Go-to Tech Stack</a>
                </li>
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">What's Next</a>
                </li>
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">Get In Touch</a>
                </li>
            </ul>

            <ul className="sidebar__external">
                <a href="https://github.com/ctfdavis" target="_blank" className="sidebar__external__set">
                    <svg className="sidebar__external__icon">
                        <use href={sprite + "#icon-github"} />
                    </svg>
                    <span className="sidebar__external__caption">github</span>
                </a>
                <a href="https://dcufo.com" target="_blank" className="sidebar__external__set">
                    <svg className="sidebar__external__icon">
                        <use href={sprite + "#icon-feather"} />
                    </svg>
                    <span className="sidebar__external__caption">blog</span>
                </a>
            </ul>

        <div className="sidebar__languages">
            <Button className="sidebar__languages__btn" variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Languages
            </Button>
            <Menu
                className="sidebar__languages__menu"
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>中文</MenuItem>
                <MenuItem onClick={handleClose}>English</MenuItem>
                <MenuItem onClick={handleClose}>Bahasa Indonesia</MenuItem>
            </Menu>
        </div>

            <footer>
                <h2 className="sidebar__title">
                    DCUFO | DAVIS CHAN
                </h2>
            </footer>
        </aside>
    )
}

export default Sidebar;
