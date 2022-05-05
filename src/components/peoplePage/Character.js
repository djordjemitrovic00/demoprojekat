import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { getStarWarsFilms } from "../../store/actions/starwars/getStarWarsFilms";
import { CharacterContainerStyled } from "../../styled/starwars/character/characterStyled";
import { FilmsContainer } from "../filmCard/FilmsContainer";
import { CharacterDataComponent } from "./CharacterDataComponent";

export const Character = (props) => {
    const params = useParams();
    const dispatch = useDispatch();
    const character = useSelector(state => state.starwars.people.filter(p => p.id === params.character_id)[0]);
    useEffect(() => {
        dispatch(getStarWarsFilms([...character.films]))
    }, [])
    return (
        <CharacterContainerStyled>
            <CharacterDataComponent detail={`Name`} value={character.name}/>
            <CharacterDataComponent detail={`Gender`} value={character.gender}/>
            <CharacterDataComponent detail={`Height`} value={character.height}/>
            <FilmsContainer />
        </CharacterContainerStyled>
    )
}