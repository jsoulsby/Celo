import React from 'react';
import styled from "styled-components";

import ScheduleIcon from '../icons/schedule.svg';
import HerdIcon from '../icons/herd.svg';
import MapIcon from '../icons/map.svg';
import PastureIcon from '../icons/pasture.svg';
import AlertsIcon from '../icons/alerts.svg';
import { withRouter, useLocation, NavLink } from 'react-router-dom'

const BottomAppBarContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #313036;
    display: flex;
    overflow-x: auto;
`;
const NavContainer = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 15px;
    color: ${props => props.activepage === "true" ? 'white' : '#7e7d81'};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;    
`;

const IconWrapper = styled.div`
    padding: ${props => props.text === "Alerts" ? '0px 0px 10px 0px' : '0px 0px 0px 0px'};
`;
const Icon = styled.img`
    height: ${props => props.text === "Alerts" ? '25px' : '35px'};
    filter: ${props => props.activepage === "true" ? 'contrast(100%)' : 'contrast(0%)'};   
`;

const renderNavBarIcon = (icon, text, location) => {

    let selected;

    if (text === "Herds" && location.includes("/Herd/")) {
        //Check if we are on Herd page
        selected = "true";
    } else {
        location.includes(text) ? selected = "true" : selected = "false"
    }
    return (
        <NavContainer activepage={selected} to={"/" + text}>
            <IconWrapper text={text}>
                <Icon src={icon} text={text} activepage={selected} />
            </IconWrapper>
            {text}
        </NavContainer>
    )
}

export const BottomAppBar = withRouter(() => {
    let location = useLocation();
    if (location.pathname === "/") {
        location.pathname = "/Herds"
    }
    return (
        <BottomAppBarContainer>
            {renderNavBarIcon(ScheduleIcon, "Schedule", location.pathname)}
            {renderNavBarIcon(PastureIcon, "Pasture", location.pathname)}
            {renderNavBarIcon(MapIcon, "Map", location.pathname)}
            {renderNavBarIcon(HerdIcon, "Herds", location.pathname)}
            {renderNavBarIcon(AlertsIcon, "Alerts", location.pathname)}
        </BottomAppBarContainer>
    );
})