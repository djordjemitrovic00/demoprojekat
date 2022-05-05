export const createModal = (state, action) => {
    state.isModalShown = true;
    state.title = action.payload.title;
    state.message = action.payload.message;
}