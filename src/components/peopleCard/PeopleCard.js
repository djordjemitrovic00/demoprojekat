import { Bold120 } from "../../styled/bold120"
import { Bold, Span } from "../../styled/helperStyled";
import { PeopleCardContainer } from "../../styled/starwars/card/peopleCardStyled"
import { PeopleCardDetail } from "./PeopleCardDetail";
import { PeopleCardName } from "./PeopleCardName";

export const PeopleCard = (props) => {
    const item = props.item;
    return (
        <PeopleCardContainer onClick={props.onClick}>
            <PeopleCardName name={item.name} />
            <PeopleCardDetail detail={item.gender.toUpperCase()} />
            <PeopleCardDetail detail={`Height: ${item.height}`} />
        </PeopleCardContainer>
    )
}