import { useEffect, useState } from "react"

let globalState = {}
let listeners = []
let actions = {}

const useStore = () => {
    const setState = useState()[1];

    useEffect(() => {
        listeners.push(setState)

        return () => {listeners = listeners.filter(li => li !== setState)}
    },[setState]);

    const dispatch = (fnIdentifier, payload) => {
        const newState = actions[fnIdentifier](globalState, payload);
        globalState = {...globalState, ...newState};

        for (const listener of listeners) {
            listener(globalState)
        }
    }

    return [
        globalState, dispatch
    ]
}

export const initStore = (initialActions, initialState) => {
    globalState = {...globalState, ...initialState};
    actions = {...actions, ...initialActions};
}

export default useStore;