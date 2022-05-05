import styledComponents from "styled-components"
import {Form, Field, ErrorMessage} from 'formik'

export const BackDrop = styledComponents.div`
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
`
export const ModalPeopleContentStyled = styledComponents.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 4vh;
    bottom: 15vh;
    margin: auto;
    width: 32%;
    min-height: 30%;
    max-height: 90%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 15px;
    flex: 1;
    & header {
        font-weight: bold;

        font-size: 150%;
        position: relative;
    }

    @media (max-width: 1400px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 90%;
        height: 85%;
        bottom: 10vh;
    }
`

export const ModalContentConfirm = styledComponents.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 4vh;
    bottom: 15vh;
    margin: auto;
    width: 25%;
    min-height: 20%;
    max-height: 24%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 15px;
    flex: 1;
    & header {
        font-weight: bold;

        font-size: 150%;
        position: relative;
    }
    @media (max-width: 1400px) {
        width: 30%;
    }

    @media (max-width: 768px) {
        width: 80%;
        height: 85%;
        bottom: 10vh;
    }
`
export const ModalContentUpdate = styledComponents.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 4vh;
    bottom: 15vh;
    margin: auto;
    width: 25%;
    min-height: 20%;
    max-height: 50%;
    background: white;
    overflow: hidden;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & header {
        font-weight: bold;
        font-size: 150%;
        position: relative;
    }

    @media (max-width: 1400px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 80%;
        height: 85%;
        bottom: 10vh;
    }
`

export const ModalCloseButtonStyled = styledComponents.button`
    color: red;
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    font-weight: bold;
    font-size: 120%;
    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 8px;
    padding-left: 8px;
    padding-top: 3px;
    z-index: 11;
    border: 0;
    background-color: darkorchid;

    & svg {
        width: 25px;
        height: 25px;
        fill: white;
    }

    &:hover svg {
        fill: black;
    }
    @media (max-width: 768px) {
        top: 0px;
        right: 12px;
        width: 15px;
        height: 15px;
        & svg {
            width: 20px;
            height: 20px;
        }
    }
`

export const ModalUpdateContainer = styledComponents.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const ModalPeopleScreenStyled = styledComponents.div`
    flex: 1;
    flex-grow: 4;
`
export const ModalPeopleFooterStyled = styledComponents.div`
    display: flex;
    flex: 1;
    flex-grow: 1;
    flex-direction: row;
    position: absolute;
    padding: 0 20px;
    left: 0;
    right: 0;
    box-sizing: border-box;
    bottom: 10px;
`
export const ModalCrudButtonStyled = styledComponents.button`
    background-color: white;
    border: 2px solid darkorchid;
    height: 36px;
    border-radius: 20px;
    color: darkorchid;
    font-weight: bold;
    font-size: 120%;
    letter-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    flex: 1;
    flex-grow: 1;
    padding: 0 10px;
    margin: 0 10px;
    margin-bottom: 5px;

    &:hover {
        background-color: darkorchid;
        color: white;
    }
`
export const ModalCrudContainerStyled = styledComponents.div`
    width:100%;
    box-sizing:border-box;
    padding: 0 10px;
    @media (max-width: 768px) {
        position: relative;
        bottom: -5px;
    }
`
export const ModalConfirmTextStyled = styledComponents.span`
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
`
export const ModalConfirmButtonsStyled = styledComponents.div`
    display: flex;
`
export const ModalConfirmButtonStyled = styledComponents.button`
    background-color: white;
    border: 2px solid darkorchid;
    height: 36px;
    border-radius: 20px;
    color: darkorchid;
    font-weight: bold;
    font-size: 120%;
    cursor: pointer;
    box-sizing: border-box;
    max-width: 100%;
    flex: 1;
    padding: 5px;
    margin: 5px;

    &:hover {
        background-color: darkorchid;
        color: white;
    }
`
export const ModalUpdateTitleStyled = styledComponents.header`
    text-align: center;
    color: white;
    font-size: 110%;
    top: 15px;
    @media (max-width: 768px) {
        top: 0;
    }
`

export const BackgroundHeaderStyled = styledComponents.div`
    background-color: darkorchid;
    width: 1000px;
    height: 200px;
    position: absolute;
    z-index: 0;
    top: -135px;
    left: -50px;
    overflow: hidden;
`
export const ModalUpdateButtonStyled = styledComponents.input`
    background-color: darkorchid;
    height: 36px;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    font-size: 120%;
    letter-spacing: 1px;
    border: 0;
    padding-left: 5px;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    flex: 1;
`
export const ModalScreenUpdateStyled = styledComponents.form`
    flex: 1;
    margin-top: 50px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`
export const UpdateLabel = styledComponents.label`
    flex: 1;
    flex-grow: 1;
    font-size: 110%;
    padding-top: 5px;
`
export const UpdateInputTextStyled = styledComponents(Field)`
    flex: 1;
    flex-grow: 4;
    margin: 5px 0;
    padding: 5px 0;
    border-radius: 20px;
    padding-left: 10px;
    margin-left: 10px;
    border: 2px solid darkorchid;

    ${({error}) => error && `
        border: 2px solid red;
    `}

    &:focus {
        border: 0;
        border: 3px solid darkorchid;
        ${({error}) => error && `
            border: 3px solid red;
        `}
    }
    &:focus-visible {
        outline: 0;
    }
`
export const UpdateInputTextErrorStyled = styledComponents(Field)`
    flex: 1;
    flex-grow: 4;
    margin: 5px 0;
    padding: 5px 0;
    border-radius: 20px;
    padding-left: 10px;
    margin-left: 10px;
    border: 2px solid red;
    &:focus {
        border: 0;
        border: 3px solid red;
    }
    &:focus-visible {
        outline: 0;
    }
`
export const UpdateFieldSelect = styledComponents(Field)`
`
export const UpdateFieldContainer = styledComponents.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    @media (max-width: 768px) {
        margin-top: 7px;
        flex-direction: column;
        text-align: center;
    }
`
export const UpdateFieldRadioButtonContainer = styledComponents.div`
    width: 100%;
    flex: 1;
`
export const UpdateFieldRadioGroupContainer = styledComponents.div`
    flex: 1;
    flex-grow: 4;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
export const ErrorMessageStyled = styledComponents.div`
    display: block;
    color: red;
`
export const UpdateFieldSelectContainer = styledComponents.div`
    flex: 1;
    flex-grow: 3.7;
    box-sizing: border-box;
    position: relative;
    top: 5px;
    & select {
        width:100%;
        padding: 7px 0;
    }
    @media (max-width: 768px) {
        padding: 8px 0;
    }
`
export const ModalPeopleContainer = styledComponents.div`
    position: relative;
    width: 100%;
    height: 100%;
`