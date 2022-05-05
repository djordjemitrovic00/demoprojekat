import { ModalPeopleFooterStyled } from "../../../styled/modalStyled"

export const ModalPeopleFooter = (props) => {
    return (
        <ModalPeopleFooterStyled>
            {props.children}
        </ModalPeopleFooterStyled>
    )
}