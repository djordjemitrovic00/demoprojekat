import styledComponents from "styled-components";

export const CharacterContainerStyled = styledComponents.div`
    margin: 20px;
`
export const CharacterDataComponentContainer = styledComponents.div`
    line-height: 50px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    text-align:left;
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`
export const CharacterDataComponentDetail = styledComponents.label`
    padding: 0 20px;
    font-weight: bold;

`
export const CharacterDataComponentValue = styledComponents.span`

`