import React from "react"
import { BackgroundHeaderStyled } from "../../styled/modalStyled"
import { PeopleCardHeaderStyled } from "../../styled/starwars/card/peopleCardStyled"

export const PeopleCardHeader = (props) => {
    const modalTitle = "Character informations"
    return (
        <React.Fragment>
        <BackgroundHeaderStyled/>
        <PeopleCardHeaderStyled>
            
            {modalTitle}
        </PeopleCardHeaderStyled>
        </React.Fragment>
    )
}