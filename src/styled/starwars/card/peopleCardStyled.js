import styledComponents from "styled-components";

export const PeopleCardContainer = styledComponents.ul`
    display: inline-block;
    flex: 1 0 20%;
    list-style-type: none;
    padding: 20px;
    margin: 20px;
    text-align: center;
    cursor: pointer;
    width: 300px;
    background-color: #faf9f7;
    box-shadow: 0px 1px 5px 1px #666666;

    @media (max-width: 768px) {
        flex-basis: 80%;
    }
`
export const PeopleCardNameStyled = styledComponents.li`
    font-weight: bold;
    font-size: 120%;
`
export const PeopleCardDetailStyled = styledComponents.li`
    font-size: 110%;
`
export const PeopleCardInModalStyled = styledComponents.ul`
    display: inline-block;
    list-style-type: none;
    padding: 20px;
    margin: 20px;
    line-height: 40px;
    height: 14vh;

    @media (max-width: 768px) {
        flex-basis: 80%;
        margin: 0;
        line-height: 30px;
        padding-top: 5px;
    }
`
export const PeopleCardHeaderStyled = styledComponents.header`
    text-align: center;
    font-size: 110%;
    top: 15px;
    z-index: 1;
    color: white;
    @media (max-width: 768px) {
        top: 0;
    }

`
export const PeopleCardFooterStyled = styledComponents.footer`
`