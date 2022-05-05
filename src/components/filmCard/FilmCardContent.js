import { FilmCardContentStyled } from "../../styled/starwars/card/filmCardStyled"
import { FilmCardDetail } from "./FilmCardDetail"
import { FilmCardDetailLong } from "./FilmCardDetailLong"

export const FilmCardContent = (props) => {
    return (
        <FilmCardContentStyled>
            <FilmCardDetail detail="Producer" value={props.film.producer}/>
            <FilmCardDetail detail="Director" value={props.film.director}/>
            <FilmCardDetailLong detail="Opening crawl" value={props.film.opening_crawl}/>
        </FilmCardContentStyled>
    )
}