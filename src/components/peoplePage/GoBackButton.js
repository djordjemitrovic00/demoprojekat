import {MdArrowBackIosNew} from 'react-icons/md'
import { GoBackButtonStyled } from '../../styled/starwars/character/characterStyled'
export const GoBackButton = (props) => {
    return (
        <GoBackButtonStyled onClick={props.onClick}>
            <MdArrowBackIosNew/>
        </GoBackButtonStyled>
    )
}