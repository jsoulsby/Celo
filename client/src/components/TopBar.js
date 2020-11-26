import React from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom'
import AddCowCard from "./Herd/AddCowCard"
import AddHerdCard from "./Herd/AddHerdCard"
import { getHerdName } from '../api/APIUtil'
import { useData } from '../hooks/useData';

const TopBarContainer = styled.div`
    top: 0;
    width: 95%;
    height: 70px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #313036;
    display: flex;
    overflow-x: auto;
    color: 'white';
    padding: 0em 2.5% 0em 2.5%;
`;

const ParentContainer = styled.div`
    font-size: 1.5em;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const ChildContainer = styled.div`
    font-size: 1.25em;
`;

const renderAddButton = (location, title, herdID) => {
    if (location === "/Herds" || location === "/") {
        //Add herd
        return <AddHerdCard />
    } else if (location.includes("/Herd/")) {
        //Add cow to herd
        return <AddCowCard herdName={title} herdID={herdID} />
    } else {
        return
    }
}

export const TopBar = () => {


    let location = useLocation()
    let title = location.pathname
    var response, herdID

    if (title.includes("/Herd/") && /\d/.test(title)) {
        //Check if we are on a herd page in which case we need to retrieve herd name
        herdID = title.match(/\d+$/)[0];
        //Regex to get herdID at end of react-router location

        response = useData("/api/herd/name/" + herdID);
        if (response.status !== "fetched") {
            //wait for data to propogate
            title = ""
        } else {
            if (!title) {
                //Incase of error redirect to home (invalid Herd e.g.)
                history.push('/Herds')
            } else {
                //Return herd title
                title = response.data.data[0].name
            }
        }
    } else if (title == "/") {
        //Handle default homepage localhost:3000
        title = "Herds"
    } else {
        //All other pages
        title = location.pathname.slice(1)

    }

    return (
        <TopBarContainer>
            <ParentContainer>
                <ChildContainer>
                    {title}
                </ChildContainer>
                {renderAddButton(location.pathname, title, herdID)}
            </ParentContainer>
        </TopBarContainer>
    );
}