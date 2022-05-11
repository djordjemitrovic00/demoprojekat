import React from "react";
import { useDispatch } from "react-redux";
import { starWarsActions } from "../../../store/slices/starWarsSlice";
import { BackDrop, BackgroundHeaderStyled, ModalContentUpdate, ModalUpdateContainer, UpdateLabel } from "../../../styled/modalStyled"
import { ModalScreenUpdate } from "./ModalScreenUpdate";
import { ModalUpdateTitle } from "./ModalUpdateTitle";
import { Formik, Form } from 'formik'
import { ModalUpdateFieldText } from "./ModalUpdateFieldText";
import { ModalCloseButton } from "../ModalCloseButton";
import { validationSchema, Gender, HeightValues } from "../../validations/characterValidation";
import { TextField } from "../../editFields/TextField";

export const ModalUpdate = (props) => {

    const initialState = {
        name: props.item.name,
        gender: props.item.gender,
        height: props.item.height
    }


    const dispatch = useDispatch();

    const closeHandler = (event) => {
        event.stopPropagation();
        props.closeFn();
    }
    const submitHandler = (values) => {
        let item = {
            ...props.item,
            name: values.name, 
            gender: values.gender,
            height: values.height
        }
        dispatch(starWarsActions.updateMan(item))
        props.closeFn();
    }

    return (

        <BackDrop onClick={closeHandler}>

            <ModalContentUpdate onClick={event => event.stopPropagation()}>

            <ModalUpdateContainer>

            <ModalCloseButton onClick={props.closeFn} title={`Close`} />
            <BackgroundHeaderStyled/>
                <ModalUpdateTitle />
                <ModalScreenUpdate>

                    <Formik
                        initialValues={initialState}
                        onSubmit={submitHandler}
                        validationSchema={validationSchema}>

                        {formProps => (
                            <Form>
                            <React.Fragment>
                                <UpdateLabel>Name: </UpdateLabel>
                                <TextField
                                    name={`Name`} />
                            </React.Fragment>
                            <React.Fragment>
                                <UpdateLabel>Gender: </UpdateLabel>
                                <ModalUpdateFieldText
                                    name={`Gender`}
                                    values={Object.values(Gender)} />
                            </React.Fragment>
                            <React.Fragment>
                                <UpdateLabel>Height: </UpdateLabel>
                                <ModalUpdateFieldText
                                    name={`Height`}
                                    values={HeightValues} />
                            </React.Fragment>
                            </Form>
                        )}

                    </Formik>
                </ModalScreenUpdate>


                </ModalUpdateContainer>
            </ModalContentUpdate>
        </BackDrop>

    )
}