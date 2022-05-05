import { createSlice } from "@reduxjs/toolkit";
import {addPeople, addFilms, removeMan, updateMan } from '../reducers/starwars/people/peopleReducer'

const initialState = {
    people: [],
    films: [],
    filmsId: -1,
    planets: [],
    vehicles: [],
    species: [],
    status: '',
    error: '',
}

const starWarsSlice = createSlice({
    name: 'starWars',
    initialState,
    reducers: {
        addPlanets() {},
        removePlanets() {},
        addVehicles() {},
        removeVehicles() {},
        addSpecies() {},
        removeSpecies() {},
        addPeople,
        addFilms,
        removeMan,
        updateMan
    }
})
export const starWarsActions = starWarsSlice.actions;

export default starWarsSlice;