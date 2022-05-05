import { ModalConfirmButtonsStyled } from "../../../styled/modalStyled"

export const ModalConfirmButtons = (props) => {
    return (
        <ModalConfirmButtonsStyled>
            {props.children}
        </ModalConfirmButtonsStyled>
    )
}