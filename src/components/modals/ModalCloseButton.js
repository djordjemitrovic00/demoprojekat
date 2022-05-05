import { ModalCloseButtonStyled } from "../../styled/modalStyled"
import {AiOutlineClose} from 'react-icons/ai'

export const ModalCloseButton = (props) => {
    return (
        <ModalCloseButtonStyled onClick={props.onClick}>
            <AiOutlineClose />
        </ModalCloseButtonStyled>
    )
}