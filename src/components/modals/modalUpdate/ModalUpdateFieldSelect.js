import { Option } from "../../../styled/helperStyled"
import { ErrorMessageStyled, UpdateFieldContainer, UpdateFieldSelect, UpdateFieldSelectContainer, UpdateLabel } from "../../../styled/modalStyled"
import { ErrorMessage, Field } from "formik"
import React from "react"

export const ModalUpdateFieldSelect = (props) => {

    return (
        <React.Fragment>
            <UpdateFieldContainer>

                <UpdateLabel>{props.type}</UpdateLabel>

                <UpdateFieldSelectContainer>

                    <Field as="select" name={`${props.type.toLowerCase()}`} id={`${props.type.toLowerCase()}`}>

                        {props.values.map(value => (
                                <Option value={value} key={value}>{value}</Option>
                        ))}

                    </Field>

                </UpdateFieldSelectContainer>
                    
                    
            </UpdateFieldContainer>

            <ErrorMessageStyled>
                <ErrorMessage name={`${props.type.toLowerCase()}`}/>
            </ErrorMessageStyled>
        </React.Fragment>
    )
}