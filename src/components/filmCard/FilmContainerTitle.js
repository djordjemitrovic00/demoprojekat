import { FilmContainerTitleStyled } from "../../styled/starwars/card/filmCardStyled"

export const FilmContainerTitle = ({title}) => {
    return (
        <FilmContainerTitleStyled>
            {title}
        </FilmContainerTitleStyled>
    )
}