import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"
import { StarWarsContext } from "../../../Context/StarWarsContext";
import { CharacterBackDropStyled, CharacterContainerStyled, CloseButton, FunctionalButtons, SubmitButton } from "../../../styled/starwars/character/characterStyled";
import { validationSchema, Gender, HeightValues } from "../../validations/characterValidation";
import { CharacterDataComponent } from "../CharacterDataComponent/Component";

export const CharacterEdit = (props) => {
    const params = useParams();
    const history = useHistory();
    const ctx = useContext(StarWarsContext);
    const character = ctx.people.find(p => p.id === params.character_id);

    const initialValues = {
        name: character.name,
        gender: character.gender,
        height: character.height
    }

    const submitHandler = (values) => {
        character.name = values.name;
        character.gender = values.gender;
        character.height = values.height;
        ctx.updateMan(character)
        history.goBack();
    }
    const goBackHandler = (values) => {
        history.goBack()
    }

    return (
        <React.Fragment>

            <CharacterBackDropStyled/>

            <CharacterContainerStyled>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}>

                    <Form>
                        <CharacterDataComponent 
                            type={`text`} 
                            edit={true} 
                            detail={`Name`} 
                            value={character.name}/>

                        <CharacterDataComponent 
                            type={`radio`}
                            values={Gender} 
                            edit={true} 
                            detail={`Gender`} 
                            value={character.gender}/>

                        <CharacterDataComponent 
                            type={`select`} 
                            values={HeightValues}
                            edit={true} 
                            detail={`Height`} 
                            value={character.height}/>

                        <FunctionalButtons>
                            <CloseButton onClick={goBackHandler}>Go back</CloseButton>
                            <SubmitButton>Save changes</SubmitButton>
                        </FunctionalButtons>

                    </Form>

                </Formik>

            </CharacterContainerStyled>
            
        </React.Fragment>
    )
}