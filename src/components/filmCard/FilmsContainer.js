import { FilmsContainerStyled } from "../../styled/starwars/card/filmCardStyled"

import { FilmContainerList } from "./FilmContainerList"
import { FilmContainerTitle } from "./FilmContainerTitle"

export const FilmsContainer = (props) => {
    let title="Films"
    return (
        <FilmsContainerStyled>
            <FilmContainerTitle title={title}/>
            <FilmContainerList/>
        </FilmsContainerStyled>
    )
}