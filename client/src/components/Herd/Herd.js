import React from "react";
import styled from "styled-components";
import { useData } from "../../hooks/useData"
import { useParams } from 'react-router-dom'
import Loader from "react-spinners/SyncLoader";
import { Center } from "../styled"
import 'rc-swipeout/assets/index.css';
import Swipeout from 'rc-swipeout';
import { deleteCow } from '../../api/APIUtil'
import { useHistory } from 'react-router-dom'

const LoadingContainer = styled(Center)`
    width: 100vw;
    height: 100vh;
`;

const CowContainer = styled.div`
    margin: 1em 2.5% 1em 2.5%;
    width: 95%;
`;
const ParentContainer = styled.div`
    height: 4em; 
    display: flex;
    align-items: center;
`;

const ChildContainer = styled.div`
    padding: 0em 0em 0em 1em;
    font-size: 1.25em;
`;

const Background = styled.div`
    background-color: #f2f2f2;
    position: fixed;
    height: 100%;
    width: 100%;
`;

export const Herd = () => {
    const params = useParams()
    let herdID = params.herdID

    let { status, data, error } = useData("/api/herds/" + herdID);

    let history = useHistory()

    const handleDelete = (herdID, cowID) => {
        deleteCow(herdID, cowID)
        status = 'fetching'
        history.go(0)
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
            {data.data.map((cow, index) => (
                <CowContainer key={index}>
                    <Swipeout
                        right={[
                            {
                                text: 'delete',
                                onPress: () => {
                                    handleDelete(herdID, cow.cow_id)
                                },
                                style: { backgroundColor: 'red', color: 'white' },
                                className: 'custom-class-2'
                            }
                        ]}
                        autoClose
                        onOpen={() => console.log('open')}
                        onClose={() => console.log('close')}
                    >
                        <ParentContainer>
                            <ChildContainer>
                                {cow.name}
                            </ChildContainer>
                        </ParentContainer>
                    </Swipeout>
                </CowContainer>
            ))}
        </Background>
    )
}
