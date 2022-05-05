import { useSelector } from "react-redux"
import { FilmContainerListStyled } from "../../styled/starwars/card/filmCardStyled"
import { FilmCardContainer } from "./FilmCardContainer";

export const FilmContainerList = () => {
    let films = useSelector(state => state.starwars.films);
    return (
        <FilmContainerListStyled>
            {films.map(item => (
                <FilmCardContainer film={item} key={item.episode_id}/>
            ))}
        </FilmContainerListStyled>

    )
}