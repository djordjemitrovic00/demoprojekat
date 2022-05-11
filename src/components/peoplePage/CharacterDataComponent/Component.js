import React from "react"
import { ComponentContainer, ComponentDetail, ComponentValue } from "../../../styled/starwars/character/characterStyled"
import { RadioField } from "../../editFields/RadioField";
import { SelectField } from "../../editFields/SelectField";
import { TextField } from "../../editFields/TextField";

export const CharacterDataComponent = (props) => {

    let valueComponent = (<ComponentValue>
                            {props.value}
                        </ComponentValue>)

    if (props.edit) {
        if (props.type === "text")
        valueComponent = <TextField
                            name={props.detail} />
        if (props.type === "radio")
            valueComponent = <RadioField 
                                name={props.detail} 
                                values={Object.values(props.values)}/>
        if (props.type === "select")
            valueComponent = <SelectField
                                name={props.detail}
                                values={props.values}
                                />
    }

    return (
        <ComponentContainer>

            <ComponentDetail>
                {props.detail}:
            </ComponentDetail>

            {valueComponent}

        </ComponentContainer>
    )
}