import { ModalCrudButtonStyled } from "../../../styled/modalStyled"

export const ModalCrudButton = (props) => {
    return (
        <ModalCrudButtonStyled onClick={props.onClick}>
            {props.title}
        </ModalCrudButtonStyled>
    )
}