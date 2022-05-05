import { ModalPeopleScreenStyled } from "../../../styled/modalStyled"

export const ModalPeopleScreen = (props) => {
    return (
        <ModalPeopleScreenStyled onClick={props.onClick}>
            {props.children}
        </ModalPeopleScreenStyled>
    )
}