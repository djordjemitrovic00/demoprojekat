import { PeopleCardDetailStyled, PeopleCardGenderStyled } from "../../styled/starwars/card/peopleCardStyled"

export const PeopleCardDetail = ({detail, value}) => {
    let stringToShow = value ? detail + ": " + value : detail
    return (
        <PeopleCardDetailStyled>
            {stringToShow}
        </PeopleCardDetailStyled>
    )
}