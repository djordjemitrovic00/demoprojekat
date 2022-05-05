import { ModalPeopleContentStyled } from "../../../styled/modalStyled"

export const ModalPeopleContent = (props) => {
    return (
        <ModalPeopleContentStyled onClick={props.onClick}>
            {props.children}
        </ModalPeopleContentStyled>
    )
}