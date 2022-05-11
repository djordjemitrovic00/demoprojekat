import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { StarWarsContext } from "../../Context/StarWarsContext";
import { CharacterBackDropStyled, CharacterContainerStyled } from "../../styled/starwars/character/characterStyled";
import { FilmsContainer } from "../filmCard/FilmsContainer";
import { ModalRemove } from "../modals/modalRemove/ModalRemove";
import { CharacterDataComponent } from "./CharacterDataComponent/Component";
import { EditButton } from "./EditButton";
import { RemoveButton } from "./RemoveButton";
import { useRouteMatch } from "react-router-dom";
import { GoBackButton } from "./GoBackButton";
import { BigText } from "../../styled/helperStyled";

export const Character = (props) => {
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const params = useParams();
    const routeMatch = useRouteMatch();
    const history = useHistory();
    const ctx = useContext(StarWarsContext);

    const character = ctx.people.find(p => p.id === params.character_id);

    useEffect(() => {
        if (character) {
            ctx.addFilms([...character.films])
        }
    }, [character])

    if (!character) {
        return (
            <BigText>
                No character found....
            </BigText>
        )
    }

    const editHandler = () => {
        history.push(`${routeMatch.url}/edit`)
    }

    const removeHandler = () => {
        setOpenConfirmModal(true);
    }

    const closeConfirmModal = () => {
        setOpenConfirmModal(false);
    }

    const removeAnswerHandler = (answer) => {
        if (answer === true) {
            ctx.removeMan(character.id)
            history.goBack()
        }
    }

    const goBackHandler = () => {
        history.goBack();
    }

    return (
        <React.Fragment>

            <CharacterBackDropStyled />

            <CharacterContainerStyled>

                {openConfirmModal ? (<ModalRemove closeFn={closeConfirmModal} setAnswer={removeAnswerHandler} />) : <></>}

                <GoBackButton onClick={goBackHandler} />
                <EditButton onClick={editHandler} />
                <RemoveButton onClick={removeHandler} />

                <CharacterDataComponent detail={`Name`} value={character.name} />
                <CharacterDataComponent detail={`Gender`} value={character.gender} />
                <CharacterDataComponent detail={`Height`} value={character.height} />

                <FilmsContainer />
            </CharacterContainerStyled>
        </React.Fragment>
    )
}