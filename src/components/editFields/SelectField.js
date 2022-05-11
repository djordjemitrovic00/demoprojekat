import { ErrorMessage, Field } from "formik"
import React from "react"
import { FieldContainer, Option } from "../../styled/helperStyled"
import { ErrorMessageStyled, UpdateFieldContainer, UpdateFieldSelectContainer } from "../../styled/modalStyled"

export const SelectField = (props) => {
    return (
        <FieldContainer>
            <UpdateFieldContainer>

            <UpdateFieldSelectContainer>

                    <Field as="select" name={`${props.name.toLowerCase()}`} id={`${props.name.toLowerCase()}`}>

                        {props.values.map(value => (
                                <Option value={value} key={value}>{value}</Option>
                        ))}
                        
                    </Field>
                        
                </UpdateFieldSelectContainer>
                    
                    
            </UpdateFieldContainer>
                    
            <ErrorMessageStyled>
                <ErrorMessage name={`${props.name.toLowerCase()}`}/>
            </ErrorMessageStyled>
        </FieldContainer>
    )
}