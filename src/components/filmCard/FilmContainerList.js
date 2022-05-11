import { useContext } from "react";
import { useSelector } from "react-redux"
import { StarWarsContext } from "../../Context/StarWarsContext";
import { FilmContainerListStyled } from "../../styled/starwars/card/filmCardStyled"
import { FilmCardContainer } from "./FilmCardContainer";

export const FilmContainerList = () => {
    const ctx = useContext(StarWarsContext);
    return (
        <FilmContainerListStyled>
            {ctx.films.map(item => (
                <FilmCardContainer film={item} key={item.episode_id}/>
            ))}
        </FilmContainerListStyled>

    )
}