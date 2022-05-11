
import { starWarsActions } from "../../slices/starWarsSlice";

export const getStarWarsFilms = (filmsToFetch) => {
    return async (dispatch) => {
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
        dispatch(starWarsActions.addFilms(listOfFilms))
    }
}