import React, { useState } from "react";
export const ProbaContext = React.createContext({
    crnaTema: true,
    postaviCrnuTemu: () => {},
    postaviBeluTemu: () => {}
});
export const ProbaContextProvider = (props) => {
    const [crnaTema, setCrnaTema] = useState(true);
    const postaviCrnuTemu = () => {
        setCrnaTema(true);
    }
    const postaviBeluTemu = () => {
        setCrnaTema(false);
    }
    return (
        <ProbaContext.Provider value={{
            crnaTema: crnaTema,
            postaviCrnuTemu: postaviCrnuTemu,
            postaviBeluTemu: postaviBeluTemu

        }}>
            {props.children}
        </ProbaContext.Provider>
    )
}