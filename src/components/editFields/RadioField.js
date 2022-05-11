import {ErrorMessage, Field} from 'formik'
import { ErrorMessageStyled, UpdateFieldContainer, UpdateFieldRadioButtonContainer, UpdateFieldRadioGroupContainer, UpdateLabel } from "../../styled/modalStyled"
import React from "react"
import { FieldContainer } from '../../styled/helperStyled'

export const RadioField = (props) => {
    return (
        <FieldContainer>
            <UpdateFieldContainer>

                <UpdateFieldRadioGroupContainer>

                    {props.values.map(value => (
                    
                        <UpdateFieldRadioButtonContainer key={value}>
                    
                            <Field type="radio" name={`${props.name.toLowerCase()}`} id={value} value={value}/>
                            <UpdateLabel htmlFor={value}>{value}</UpdateLabel>
                    
                        </UpdateFieldRadioButtonContainer>
                    
                    ))}
                    
                </UpdateFieldRadioGroupContainer>
                
            </UpdateFieldContainer>
                
            <ErrorMessageStyled>
                
                <ErrorMessage name={`${props.name.toLowerCase()}`}/>
                
            </ErrorMessageStyled>
            
        </FieldContainer>
    )
}