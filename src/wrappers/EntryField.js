import React, { useEffect } from "react"
import "../App.css"

export const EntryField = (props) => {
    return (
        <div className={`entryField ${(props.className ? props.className : "")}`}>
            {props.children}
        </div>
    )
}