import styledComponents from "styled-components";

export const FilmsContainerStyled = styledComponents.div`
    height: 37vh;
    @media (max-width: 768px) {
        margin-top: 5px;
        height: 35vh;
    }
`

export const FilmCardContainerStyled = styledComponents.div`

`

export const FilmCardHeaderStyled = styledComponents.span`
    display: flex;
    font-size: 75%;
    width: 100%;
    padding: 12px;
    padding-bottom: 14px;
    padding-left: 20px;
    box-shadow: 0 0 2px black;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 4px;
    background-color: darkorchid;
    color: white;
    justify-content: space-between;
    position: relative;
    z-index: 5;
    & * {
        display: flex;
        flex: 1;
    }
`

export const FilmCardContentStyled = styledComponents.ul`
    position: relative;
    top: -20px;
    height: auto;
    z-index: 1;
    margin-left: 2px;
    padding: 10px;
    padding-top: 10px;
    width: 99%;
    list-style-type: none;
    box-shadow: 0 1px 3px black;
`
export const ExpandingSignStyled = styledComponents.div`
    display: inline-block;
    text-align: right;
    flex-grow: 1;
    font-weight: bold;
    font-size: 30px;
    line-height: 25px;
`
export const FilmCardHeaderTitleStyled = styledComponents.div`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
`

export const FilmContainerTitleStyled = styledComponents.div`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`
export const FilmCardDetailStyled = styledComponents.li`
    line-height: 30px;
`
export const FilmCardDetailLongStyled = styledComponents.li`
`
export const FilmContainerListStyled = styledComponents.div`
    overflow-y: auto;
    margin-top: 5px;
    height: inherit;   
`