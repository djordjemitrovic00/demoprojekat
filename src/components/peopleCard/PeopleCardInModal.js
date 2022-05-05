import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getStarWarsFilms } from "../../store/actions/starwars/getStarWarsFilms";
import { PeopleCardInModalStyled } from "../../styled/starwars/card/peopleCardStyled"
import { PeopleCardDetail } from "./PeopleCardDetail";
export const PeopleCardInModal = (props) => {
    return (
        <PeopleCardInModalStyled onClick={props.onClick}>
            <PeopleCardDetail detail={"Name"} value={props.item.name} />
            <PeopleCardDetail detail={"Gender"} value={props.item.gender.toUpperCase()} />
            <PeopleCardDetail detail={"Height"} value={props.item.height} />
        </PeopleCardInModalStyled>
    )
}