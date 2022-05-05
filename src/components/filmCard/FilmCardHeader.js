import { ExpandingSignStyled, FilmCardHeaderStyled, FilmCardHeaderTitleStyled } from "../../styled/starwars/card/filmCardStyled"

export const FilmCardHeader = (props) => {
    return (
        <FilmCardHeaderStyled onClick={props.onClick}>
            <FilmCardHeaderTitleStyled>
                {props.title}
            </FilmCardHeaderTitleStyled>
            <ExpandingSignStyled>
                {props.show ? `-` : `+`}
            </ExpandingSignStyled>
        </FilmCardHeaderStyled>
    )
}