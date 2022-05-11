import styledComponents from "styled-components";

export const CharacterContainerStyled = styledComponents.div`
    margin: 20px 350px;
    position: relative;
    box-shadow: 0 0 10px 3px black;
    padding: 40px;
    background-color: white;
    & form {
        width: 65%;
        margin-left: auto;
        margin-right: auto;
    }
    & form div {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    @media (max-width: 1400px) {
        margin: 20px 100px;
        padding: 40px;
        & form {
            width: 70%;
        }
    }
    @media (max-width: 768px) {
        margin: 20px 30px;
        padding: 10px;
        & form {
            width: 100%;
        }
    }
`
export const CharacterBackDropStyled = styledComponents.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(188, 121, 222);
    z-index: -1;
`
export const ComponentContainer = styledComponents.div`
    line-height: 50px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`
export const ComponentDetail = styledComponents.label`
    padding: 0 20px;
    font-weight: bold;

`
export const ComponentValue = styledComponents.span`

`
export const EditButtonStyled = styledComponents.div`
    width: 45px;
    height: 47px;
    border: 2px solid gray;
    border-radius: 100%;
    padding: 5px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 75px;
    background-color: white;
    z-index: 11;

    & svg {
        width: 37px;
        height: 37px;
        stroke: gray;
        fill: gray;
    }
    &:hover {
        background-color: gray;
    }
    &:hover svg {
        stroke: white;
        fill: white;
    }
    @media (max-width: 768px) {
        position: fixed;
        bottom: 20px;
        right: 20px;
        top: auto;
    }
`
export const RemoveButtonStyled = styledComponents.div`
    width: 46px;
    height: 47px;
    border: 2px solid gray;
    border-radius: 100%;
    padding: 3px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: white;
    z-index: 11;

    & svg {
        width: 37px;
        height: 37px;
        stroke: gray;
        fill: gray;
    }
    &:hover {
        background-color: gray;
    }
    &:hover svg {
        stroke: white;
        fill: white;
    }
    @media (max-width: 768px) {
        position: fixed;
        bottom: 20px;
        left: 20px;
        top: auto;
    }
`
export const CharacterDataComponentEditContainer = styledComponents.div`
`
export const SubmitButton = styledComponents.button`
    background-color: darkorchid;
    border: 0;
    border-radius: 20px;
    padding: 10px;
    color: white;
    font-weight: bold;
    margin: 10px;
    cursor: pointer;
    flex-grow: 1;
    &:hover {
        background-color: white;
        color: darkorchid;
        border: 2px solid darkorchid;
    }
`
export const CloseButton = styledComponents.button`
    background-color: white;
    border: 2px solid darkorchid;
    border-radius: 20px;
    padding: 10px;
    color: darkorchid;
    font-weight: bold;
    margin: 10px;
    flex-grow: 1;
    cursor: pointer;

    &:hover {
        background-color: darkorchid;
        color: white;
    }
`
export const FunctionalButtons = styledComponents.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
`
export const GoBackButtonStyled = styledComponents.div`
    width: 37px;
    height: 37px;
    border: 2px solid gray;
    border-radius: 100%;
    cursor: pointer;
    position: absolute;
    padding-top: 1px;
    top: 5px;
    left: 5px;
    background-color: white;
    z-index: 11;

    & svg {
        width: 31px;
        height: 31px;
        stroke: gray;
        fill: gray;
    }
    &:hover {
        background-color: gray;
    }
    &:hover svg {
        stroke: white;
        fill: white;
    }
    @media (max-width: 768px) {
        position: fixed;
        bottom: 20px;
        right: 20px;
        top: auto;
    }
`