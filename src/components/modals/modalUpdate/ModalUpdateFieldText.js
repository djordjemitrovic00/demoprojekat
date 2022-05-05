import React from "react"
import { ErrorMessageStyled, UpdateFieldContainer, UpdateInputTextStyled, UpdateLabel } from "../../../styled/modalStyled"
import { ErrorMessage } from "formik"

export const ModalUpdateFieldText = (props) => {
    return (
        <React.Fragment>
            <UpdateFieldContainer>

                <UpdateLabel>{props.type}</UpdateLabel>
                <UpdateInputTextStyled 
                    name={`${props.type.toLowerCase()}`} 
                    id={`${props.type.toLowerCase()}`} 
                    type="text" 
                    error={props.error} />

            </UpdateFieldContainer>

            <ErrorMessageStyled>
                <ErrorMessage  name={`${props.type.toLowerCase()}`}/>
            </ErrorMessageStyled>

        </React.Fragment>
    )
}