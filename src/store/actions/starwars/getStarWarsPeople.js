import { peopleUrlPage } from "../../../api/requestUrl";
import { getIdFromPeople } from "../../../helper/getIdFromPeople";
import { starWarsActions } from "../../slices/starWarsSlice";

export const getStarWarsPeople = (page) => {
    return async (dispatch) => {
        const response = await fetch(peopleUrlPage(page));
        if (!response.ok) {
            throw new Error("Connection failed!");
        }
        const data = await response.json();
        data.results.forEach(item => {
            item.id = getIdFromPeople(item);
        });
        dispatch(starWarsActions.addPeople(data.results));
    }
}