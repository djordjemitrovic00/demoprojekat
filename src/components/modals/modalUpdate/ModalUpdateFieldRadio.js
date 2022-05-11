import React from "react"
import { ErrorMessageStyled, UpdateFieldContainer, UpdateFieldRadioButtonContainer, UpdateFieldRadioGroupContainer, UpdateLabel } from "../../../styled/modalStyled"
import {Field, ErrorMessage} from 'formik'

export const ModalUpdateFieldRadio = (props) => {
    return (
        <React.Fragment>
            <UpdateFieldContainer>

                

                <UpdateFieldRadioGroupContainer>

                    {props.values.map(value => (

                        <UpdateFieldRadioButtonContainer key={value}>

                            <Field type="radio" name={`${props.type.toLowerCase()}`} value={value}/>
                            <UpdateLabel>{value}</UpdateLabel>

                        </UpdateFieldRadioButtonContainer>

                    ))}

                </UpdateFieldRadioGroupContainer>
     
            </UpdateFieldContainer>

            <ErrorMessageStyled>

                <ErrorMessage name={`${props.type.toLowerCase()}`}/>

            </ErrorMessageStyled>
            
        </React.Fragment>
    )
}