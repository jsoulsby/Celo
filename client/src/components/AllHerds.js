import React from 'react';
import styled from "styled-components";
import Loader from "react-spinners/SyncLoader";
import { useData } from "../hooks/useData";
import { Center } from "./styled";
import 'rc-swipeout/assets/index.css';
import Swipeout from 'rc-swipeout';
import { deleteHerd } from '../api/APIUtil'
import { useHistory, withRouter } from 'react-router-dom'



const LoadingContainer = styled(Center)`
    width: 100vw;
    height: 100vh;
`;

const HerdContainer = styled.div`
    margin: 1em 2.5% 1em 2.5%;
    width: 95%;
`;

const ParentContainer = styled.div`
    height: 4em; 
    display: flex;
    align-items: center;
`;

const ColouredBar = styled.div`
    width: 0.5em;
    height: 100%;
    background-color: ${props => props.color};
`;

const ChildContainer = styled.div`
    padding: 0em 0em 0em 1em;
    font-size: 1.25em;
`;

const ArrowContainer = styled.div`
    padding: 0em 1em 0em 0em;
    font-size: 1.25em;
    margin-left: auto;
    color: #b8b8ba;
`;

const Background = styled.div`
    background-color: #f2f2f2;
    position: fixed;
    height: 100%;
    width: 100%;
`;


export const AllHerds = withRouter(() => {
    let { status, data, error } = useData("api/herds");
    let history = useHistory()

    const handleDelete = (herdID) => {
        deleteHerd(herdID)
        status = 'fetching'
        history.go(0)
    }

    const openHerd = (herdID) => {
        status = 'fetching'
        history.push('/Herd/' + herdID)
    }

    const randomColor = () => {
        return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
    }

    return (status !== "fetched" ?
        <LoadingContainer>
            <Loader />
        </LoadingContainer>
        :
        <Background>
            {data.data.map((herd, index) => (
                <HerdContainer key={index}>
                    <Swipeout
                        right={[
                            {
                                text: 'delete',
                                onPress: () => {
                                    handleDelete(herd.id)
                                },
                                style: { backgroundColor: 'red', color: 'white' },
                                className: 'custom-class-2'
                            }
                        ]}
                        left={[
                            {
                                text: 'Open',
                                onPress: () => {
                                    openHerd(herd.id)
                                },
                                style: { backgroundColor: 'green', color: 'white' },
                                className: 'custom-class-2'
                            }
                        ]}
                        autoClose
                        onOpen={() => console.log('open')}
                        onClose={() => console.log('close')}
                    >
                        <ParentContainer>
                            <ColouredBar color={randomColor} />
                            <ChildContainer>
                                {herd.name}
                            </ChildContainer>
                            <ArrowContainer>&gt;</ArrowContainer>
                        </ParentContainer>
                    </Swipeout>
                </HerdContainer>
            ))}
        </Background>
    )

})
