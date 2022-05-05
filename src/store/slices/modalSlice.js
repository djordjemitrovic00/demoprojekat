import { createSlice } from "@reduxjs/toolkit";
import { createModal } from "../reducers/modal/createModal";
import { deleteModal } from "../reducers/modal/deleteModal";

const initialState = {
    title: 'Naslov',
    message: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empires\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    isModalShown: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        createModal,
        deleteModal
    }
});

export const modalSliceActions = modalSlice.actions;

