import { ErrorMessage } from "formik"
import React from "react"
import { FieldContainer } from "../../styled/helperStyled"
import { ErrorMessageStyled, UpdateFieldContainer, UpdateInputTextStyled } from "../../styled/modalStyled"
export const TextField = (props) => {
    return (
        <FieldContainer>
            <UpdateFieldContainer>

                <UpdateInputTextStyled 
                    name={`${props.name.toLowerCase()}`} 
                    id={`${props.name.toLowerCase()}`} 
                    type="text" 
                    error={props.error} />

            </UpdateFieldContainer>
            
            <ErrorMessageStyled>
                <ErrorMessage  name={`${props.name.toLowerCase()}`}/>
            </ErrorMessageStyled>
        </FieldContainer>
    )
}