import React, { useContext, useEffect, useState } from "react"
import { PeopleListStyled } from "../styled/starwars/list/peopleListStyled";
import { PeopleCard } from "./peopleCard/PeopleCard";
import { ModalPeople } from "./modals/modalPeople/ModalPeople";
import { BigText, LoadMoreButtonStyled } from "../styled/helperStyled";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { StarWarsContext } from "../Context/StarWarsContext";
import { randomKey } from "./validations/randomKey";
import useStore from "./toDo/todoStore/store";



export const StarWarsApi = () => {
    const [isModalShown, setIsModalShown] = useState(false);
    const [itemId, setItemId] = useState(-1);
    const [page, setPage] = useState(-1);
    const [initialLoad, setInitialLoad] = useState(true);

    const state = useStore()[0];

    const ctx = useContext(StarWarsContext);

    useEffect(() => {
        setPage(Math.ceil(ctx.people.length/10)+1)
        console.log('hooks')
        console.log(state);
    }, []);

    useEffect(() => {
        console.log(history)
        if (page !== -1 && initialLoad) {
            loadPeople();
            setInitialLoad(false);
        }
    }, [page])

    const loadPeople = () => {
        ctx.addPeople(page);
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
                {ctx.people.length > 0 ? ctx.people.map((item, index) => (
                    <PeopleCard item={item} onClick={() => clickPeopleHandler(item)} key={randomKey()} />
                )) : (
                    <BigText>No results...</BigText>
                )}
            </PeopleListStyled>

        </React.Fragment>
    )
}