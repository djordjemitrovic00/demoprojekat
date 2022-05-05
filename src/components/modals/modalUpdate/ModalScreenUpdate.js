import { ModalScreenUpdateStyled } from "../../../styled/modalStyled"

export const ModalScreenUpdate = (props) => {
    return (
        <ModalScreenUpdateStyled>
            {props.children}
        </ModalScreenUpdateStyled>
    )
}