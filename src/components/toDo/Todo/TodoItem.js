import classes from "../styling.module.css"
import { CSSTransition } from "react-transition-group"
import React, { useEffect, useState } from "react"
import "./TransitionCSS.css"
export const TodoItem = (props) => {

    const [toAnimate, setToAnimate] = useState(false);
    
    const clickHandler = (event) => {
        props.removeItem(props.todo);
        setToAnimate(false);
    }
    useEffect(() => {
        setToAnimate(true);
    }, [])

    return (
        <CSSTransition mountOnEnter unmountOnExit timeout={{enter: 300, exit: 300}} classNames="item" in={toAnimate}>
            <div onClick={clickHandler} className={classes.item}>
                {props.todo.text}
            </div>
        </CSSTransition>
    )
}