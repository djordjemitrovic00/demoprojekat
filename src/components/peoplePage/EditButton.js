import {MdEditNote} from 'react-icons/md'
import { EditButtonStyled } from '../../styled/starwars/character/characterStyled'

export const EditButton = (props) => {
    return (
        <EditButtonStyled onClick={props.onClick}>
            <MdEditNote />
        </EditButtonStyled>
    )
}