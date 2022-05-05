import { PeopleCardNameStyled } from "../../styled/starwars/card/peopleCardStyled"

export const PeopleCardName = ({name}) => {
    return (
        <PeopleCardNameStyled>
            {name}
        </PeopleCardNameStyled>
    )
}