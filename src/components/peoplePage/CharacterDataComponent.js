import React from "react"
import { CharacterDataComponentContainer, CharacterDataComponentDetail, CharacterDataComponentValue } from "../../styled/starwars/character/characterStyled"

export const CharacterDataComponent = (props) => {
    return (
        <CharacterDataComponentContainer>
            <CharacterDataComponentDetail>
                {props.detail}:
            </CharacterDataComponentDetail>
            <CharacterDataComponentValue>
                {props.value}
            </CharacterDataComponentValue>
        </CharacterDataComponentContainer>
    )
}