import { ModalCrudContainerStyled } from "../../../styled/modalStyled"

export const ModalCrudContainer = (props) => {
    return (
        <ModalCrudContainerStyled onClick={props.onClick}>
            {props.children}
        </ModalCrudContainerStyled>
    )
}