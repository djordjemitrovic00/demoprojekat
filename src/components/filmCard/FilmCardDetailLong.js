import { Bold } from "../../styled/helperStyled"
import { FilmCardDetailLongStyled } from "../../styled/starwars/card/filmCardStyled"

export const FilmCardDetailLong = (props) => {
    return (
        <FilmCardDetailLongStyled>
            <Bold> {props.detail}</Bold>: {props.value}
        </FilmCardDetailLongStyled>
    )
}