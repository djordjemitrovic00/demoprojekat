import { ModalConfirmButtonStyled} from "../../../styled/modalStyled"

export const ModalConfirmDecline = (props) => {
    return (
        <ModalConfirmButtonStyled onClick={props.onClick}>
            Decline
        </ModalConfirmButtonStyled>
    )
}