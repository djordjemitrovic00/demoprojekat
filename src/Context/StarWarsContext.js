import React, { useState } from "react";
import { peopleUrlPage } from "../api/requestUrl";
import { getIdFromPeople } from "../helper/getIdFromPeople";

export const StarWarsContext = React.createContext({
    people: [],
    films: [],
    addPeople: async () => {},
    addFilms: async () => {},
    removeMan: async () => {},
    updateMan: () => {}
});

export const StarWarsProvider = (props) => {
    const [people, setPeople] = useState([]);
    const [films, setFilms] = useState([]);
    const addPeople = async (page) => {
        const response = await fetch(peopleUrlPage(page));
        if (!response.ok) {
            throw new Error("Connection failed!");
        }
        const data = await response.json();
        data.results.forEach(item => {
            item.id = getIdFromPeople(item);
        });
        setPeople(prevState => [...prevState, ...data.results])
    }
    const addFilms = async (filmsToFetch) => {
        let listOfFilms = [];
        for(const item of filmsToFetch) {
            const response = await fetch(item);
            if (!response.ok) {
                throw new Error("Error occured!");
            }
            const data = await response.json();

            listOfFilms.push(data);
            console.log('podatak ubacen');
            console.log(listOfFilms);
        }
        setFilms([...listOfFilms])
    }
    const removeMan = (id) => {
        setPeople(prevState => [...prevState].filter(p => p.id !== id))
    }
    const updateMan = (character) => {
        let peopleLocalList = [...people];
        let index = peopleLocalList.findIndex(item => item.id === character.id);
        peopleLocalList[index] = character;
        setPeople([...people]);
    }
    return (
        <StarWarsContext.Provider value={{
            people,
            films,
            addPeople,
            addFilms,
            removeMan,
            updateMan
        }}>
            {props.children}
        </StarWarsContext.Provider>
    )
}