import React from "react";
import { useDispatch } from "react-redux";
import { starWarsActions } from "../../../store/slices/starWarsSlice";
import { BackDrop, BackgroundHeaderStyled, ModalContentUpdate, ModalUpdateContainer } from "../../../styled/modalStyled"
import { ModalScreenUpdate } from "./ModalScreenUpdate";
import { ModalUpdateButton } from "./ModalUpdateButton";
import { ModalUpdateTitle } from "./ModalUpdateTitle";
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { ModalUpdateFieldText } from "./ModalUpdateFieldText";
import { ModalUpdateFieldRadio } from "./ModalUpdateFieldRadio";
import { ModalUpdateFieldSelect } from "./ModalUpdateFieldSelect";
import { ModalCloseButton } from "../ModalCloseButton";

export const ModalUpdate = (props) => {

    const Gender = {
        MALE: "male",
        FEMALE: "female",
        NA: "n/a"
    }

    const initialState = {
        name: props.item.name,
        gender: props.item.gender,
        height: props.item.height
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(4, "Name must be atleast 5 characters!")
            .max(40, "Name cannot be longer than 40 characters!")
            .required("Name cannot be empty!"),
        gender: Yup.mixed().oneOf(Object.values(Gender)).required("Gender cannot be empty!"),
        height: Yup.number("Height must be number!")
            .integer("Height must be integer number!")
            .positive("Height must be positive number!")
            .min(120, "Height must be number above 0!")
            .max(300, "Height must be number below 300!")
            .required("Height cannot be empty!")
    })
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
                                <ModalUpdateFieldText
                                    type={`Name`}
                                    error={formProps.errors.name && formProps.touched.name} />
                                <ModalUpdateFieldRadio
                                    type={`Gender`}
                                    values={Object.values(Gender)}
                                    error={formProps.errors.gender && formProps.touched.gender} />
                                <ModalUpdateFieldSelect
                                    type={`Height`}
                                    values={Array.from(Array(180).keys()).map(item => item + 120)}
                                    error={formProps.errors.height && formProps.touched.height} />
                                <ModalUpdateButton />
                            </Form>
                        )}

                    </Formik>
                </ModalScreenUpdate>


                </ModalUpdateContainer>
            </ModalContentUpdate>
        </BackDrop>

    )
}