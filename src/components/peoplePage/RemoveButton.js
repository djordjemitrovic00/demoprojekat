import {MdDeleteOutline} from 'react-icons/md'
import { RemoveButtonStyled } from '../../styled/starwars/character/characterStyled'
export const RemoveButton = (props) => {
    return (
        <RemoveButtonStyled onClick={props.onClick}>
            <MdDeleteOutline />
        </RemoveButtonStyled>
    )
}