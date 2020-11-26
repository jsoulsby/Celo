import React, { useState } from "react";
import styled from "styled-components";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { addHerd } from '../../api/APIUtil.js'
import { useHistory } from 'react-router-dom'

const AddButton = styled.div`
    margin-left: auto;
    font-size: 1.5em;
`;

const contentStyle = {
    maxWidth: "600px",
    width: "75%",
    maxHeight: "600px",
    height: "23.5em",
    padding: "0em 0em 0em 0em"
}

const Container = styled.div`
`;

const GreyBox = styled.div`
    background: #f2f2f2;
    height: 7.5em;
    position: relative;
    display: flex;
    align-items: center;
`;
const InputHerd = styled.input`
    margin-left: auto;
    margin-right: auto;
    display: block;
    height: 3em;
    border: transparent;
    box-shadow: 0px 5px 6px -3px #7D7D7D;
    border-radius: 0.25em;
    width: 80%;
    padding: 0em 1em 0em 1em;
    font-size: 1.05em;
    &:focus{
        outline: none;
    }
`;

const ModalTitle = styled.div`
    margin: 1.25em 0.75em 0em 0.75em;
    font-size: 1.1em;
    border-bottom: 0.15em #f2f2f2 solid;

`;

const ModalText = styled.div`
    margin: 1.75em 0.75em 0em 0.75em;
    font-size: 1.1em;
`;

const CreateHerdButton = styled.button`
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 1.1em;
    color: white;
    background: black;
    border: transparent;
    box-shadow: 0px 5px 6px -3px #7D7D7D;
    border-radius: 0.25em;
    width: 50%;
    height: 3em;
`;

const AddHerdCard = () => {

    const [input, setInput] = useState(null);
    let history = useHistory()

    const handleOnClick = (e) => {
        addHerd(input)
        history.go(0)
    }

    const handleOnChange = (value) => {
        setInput(value)
        console.log(input)
    }

    return (
        <Popup trigger={< AddButton >+</AddButton >}
            modal
            contentStyle={contentStyle}
        >
            {close => (
                <Container>
                    <GreyBox>
                        <InputHerd placeholder={"Enter your herds name"} onChange={(e) => handleOnChange(e.target.value)} />
                    </GreyBox>
                    <ModalTitle>Add new herd</ModalTitle>
                    <ModalText>Please name your new herd. You can add cows to the herd once it is created.</ModalText>
                    <CreateHerdButton onClick={handleOnClick}>Create herd</CreateHerdButton>
                </Container>
            )}
        </Popup>
    );
}

export default AddHerdCard
