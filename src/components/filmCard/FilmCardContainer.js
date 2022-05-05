import { useState } from "react"
import { FilmCardContainerStyled} from "../../styled/starwars/card/filmCardStyled"
import { FilmCardContent } from "./FilmCardContent";
import { FilmCardHeader } from "./FilmCardHeader";

export const FilmCardContainer = ({film}) => {
    const [showContent, setShowContent] = useState(false);
    const toggleContentHandler = (event) => {
        setShowContent(prevState => !prevState);
    } 
    return (
        <FilmCardContainerStyled>
            <FilmCardHeader show={showContent} title={film.title} onClick={toggleContentHandler}/>
            {showContent ? <FilmCardContent  film={film}/> : <></>}
        </FilmCardContainerStyled>
    )
}