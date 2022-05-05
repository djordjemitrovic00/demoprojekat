import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getStarWarsPeople } from "../store/actions/starwars/getStarWarsPeople";
import { PeopleListStyled } from "../styled/starwars/list/peopleListStyled";
import { PeopleCard } from "./peopleCard/PeopleCard";
import { ModalPeople } from "./modals/modalPeople/ModalPeople";
import { getIdFromPeople } from "../helper/getIdFromPeople";
import { LoadMoreButtonStyled } from "../styled/helperStyled";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";



export const StarWarsApi = () => {
    const [isModalShown, setIsModalShown] = useState(false);
    const [itemId, setItemId] = useState(-1);
    const people = useSelector(state => state.starwars.people);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    useEffect(() => {
        loadPeople();
    }, []);

    const loadPeople = () => {
        dispatch(getStarWarsPeople(page));
        setPage(prevState => prevState+1)
    }
    const history = useHistory();
    const routeMatch = useRouteMatch();


    const closeModalHandler = () => {
        setIsModalShown(false);
    }
    const clickPeopleHandler = (item) => {
        history.push({
            pathname: `${routeMatch.path}/${item.id}`
        })
    }
    const loadMoreHandler = (item) => {
        loadPeople();
    }

    return (
        <React.Fragment>
            {isModalShown && (<ModalPeople title="Proba" itemid={itemId} closeFn={closeModalHandler}/>)}
            <LoadMoreButtonStyled onClick={loadMoreHandler}>Load more</LoadMoreButtonStyled>

            <PeopleListStyled>
                {people.map(item => (
                    <PeopleCard item={item} onClick={() => clickPeopleHandler(item)} key={item.id} />
                ))}
            </PeopleListStyled>

        </React.Fragment>
    )
}