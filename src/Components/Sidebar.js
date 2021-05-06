import React, {useState, useContext} from 'react';
import {AppContext} from './AppContext';
import { HashLink } from 'react-router-hash-link';
import logo from '../Images/site_logo.svg';
import sprite from '../Images/sprite.svg';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "../Translations/i18n";

const Sidebar = () => {
    const { t } = useTranslation();

    const [sidebarClosed, setSidebarClosed, language, setLanguage] = useContext(AppContext);

    const languageHandle = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
        handleClose();
    }

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
                    <HashLink smooth to="#Home" className="sidebar__link" onClick={sidebarClose}>{t("home")}</HashLink>
                </li>
                <li className="sidebar__item">
                    <HashLink smooth to="#Works" className="sidebar__link" onClick={sidebarClose}>{t("selected_works")}</HashLink>
                </li>
                <li className="sidebar__item">
                    <HashLink smooth to="#TechStack" className="sidebar__link" onClick={sidebarClose}>{t("go_to_tech_stack")}</HashLink>
                </li>
                <li className="sidebar__item">
                    <HashLink smooth to="#WhatsNext" className="sidebar__link" onClick={sidebarClose}>{t("whats_next")}</HashLink>
                </li>
                <li className="sidebar__item">
                    <HashLink smooth to="#GetInTouch" className="sidebar__link" onClick={sidebarClose}>{t("get_in_touch")}</HashLink>
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
            <Button className="sidebar__languages__btn material-ui-btn" variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {t("languages")}
            </Button>
            <Menu
                className="sidebar__languages__menu"
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{languageHandle("zh")}}>中文</MenuItem>
                <MenuItem onClick={()=>{languageHandle("en")}}>English</MenuItem>
                <MenuItem onClick={()=>{languageHandle("in")}}>Bahasa Indonesia</MenuItem>
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
