import { ModalConfirmButtonStyled } from "../../../styled/modalStyled"

export const ModalConfirmAccept = (props) => {
    return (
        <ModalConfirmButtonStyled onClick={props.onClick}>
            Accept
        </ModalConfirmButtonStyled>
    )
}