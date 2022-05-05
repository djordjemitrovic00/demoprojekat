import { Bold } from "../../styled/helperStyled";
import { FilmCardDetailStyled } from "../../styled/starwars/card/filmCardStyled"

export const FilmCardDetail = (props) => {
    return (
        <FilmCardDetailStyled>
            <Bold>{props.detail}</Bold>: {props.value}
        </FilmCardDetailStyled>
    )
}