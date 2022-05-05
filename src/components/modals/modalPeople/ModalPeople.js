import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getStarWarsFilms } from "../../../store/actions/starwars/getStarWarsFilms";
import { starWarsActions } from "../../../store/slices/starWarsSlice";
import { BackDrop, ModalPeopleContainer } from "../../../styled/modalStyled";
import { FilmsContainer } from "../../filmCard/FilmsContainer";
import { ModalRemove } from "../modalRemove/ModalRemove";
import { ModalUpdate } from "../modalUpdate/ModalUpdate";
import { PeopleCardHeader } from "../../peopleCard/PeopleCardHeader";
import { PeopleCardInModal } from "../../peopleCard/PeopleCardInModal";
import { ModalCrudButton } from "./ModalCrudButton";
import { ModalCrudContainer } from "./ModalCrudContainer";
import { ModalCloseButton } from "../ModalCloseButton";
import { ModalPeopleContent } from "./ModalPeopleContent";
import { ModalPeopleScreen } from "./ModalPeopleScreen";
import { ModalPeopleFooter } from "./ModalPeopleFooter";

export const ModalPeople = (props) => {
    const item = useSelector(state => state.starwars.people.filter(p => p.id === props.itemid)[0]);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStarWarsFilms([...item.films]))
    }, [])

    const removeHandler = () => {
        setOpenConfirmModal(true);
    }

    const updateHandler = () => {
        setOpenUpdateModal(true);
    }

    const removeAnswerHandler = (answer) => {
        if (answer === true) {
            dispatch(starWarsActions.removeMan(item.id))
            props.closeFn();
        }
    }

    const closeConfirmModal = () => {
        setOpenConfirmModal(false);
    }
    const closeUpdateModal = () => {
        setOpenUpdateModal(false);
    }

    return (
        <BackDrop onClick={props.closeFn}>
            {openConfirmModal ? (<ModalRemove closeFn={closeConfirmModal} setAnswer={removeAnswerHandler} />) : <></>}
            {openUpdateModal ? (<ModalUpdate closeFn={closeUpdateModal} item={item} />) : <></>}

            <ModalPeopleContent onClick={(e) => e.stopPropagation()}>
                <ModalPeopleContainer>

                    <ModalCloseButton onClick={props.closeFn} title={`Close`} />
                    
                    <ModalPeopleScreen>

                        <PeopleCardHeader />
                        <PeopleCardInModal item={item} />
                        <FilmsContainer />

                    </ModalPeopleScreen>
                    <ModalPeopleFooter>
                            <ModalCrudButton title={`Remove`} onClick={removeHandler} />
                            <ModalCrudButton title={`Update`} onClick={updateHandler} />
                    </ModalPeopleFooter>
                </ModalPeopleContainer>
            </ModalPeopleContent>
        </BackDrop>
    )
}