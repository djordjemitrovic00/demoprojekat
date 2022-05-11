import { Bold120 } from "../../styled/bold120"
import { Bold, Span } from "../../styled/helperStyled";
import { PeopleCardContainer } from "../../styled/starwars/card/peopleCardStyled"
import { PeopleCardDetail } from "./PeopleCardDetail";
import { PeopleCardName } from "./PeopleCardName";

export const PeopleCard = (props) => {
    return (
        <PeopleCardContainer onClick={props.onClick}>
            <PeopleCardName name={props.item.name} />
            <PeopleCardDetail detail={props.item.gender.toUpperCase()} />
            <PeopleCardDetail detail={`Height: ${props.item.height}`} />
        </PeopleCardContainer>
    )
}