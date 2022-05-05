import { STATUS_ERROR, STATUS_OK } from "../../../../constants/statusConstants";

const isManInPeopleList = (listOfPeople, man) => {
    if ([...listOfPeople].find(p => p.url === man.url)) return true;
    return false;
}

export const addMan = (state, action) => {
    const previousPeopleList = [...state.people];
    if ( !isManInPeopleList(previousPeopleList, action.payload) ) {
        state.people.push(action.payload);
        state.status = STATUS_OK;
    } else {
        state.status = STATUS_ERROR;
        state.error = `${action.payload.name} is already in list!`;
    }
}

export const addPeople = (state, action) => {
    state.people = [...state.people, ...action.payload];
}

export const removeMan = (state, action) => {
    state.people = [...state.people].filter(p => action.payload !== p.id)
}
export const addFilms = (state, action) => {
    state.films = [...action.payload]
}
export const updateMan = (state, action) => {
    let index = state.people.findIndex(item => item.id === action.payload.id);
    state.people[index] = action.payload;
}