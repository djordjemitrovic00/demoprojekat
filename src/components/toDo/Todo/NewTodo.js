import React, { useRef } from "react";
import classes from "../styling.module.css";
import TodoClass from "../TodoClass";

const NewTodo = (props) => {
  const textRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault()
    const textInput = textRef.current.value;
    props.addTodo(new TodoClass(textInput));
    textRef.current.value = ""
      
  };
  return (
    <form className={classes.item}>
      <textarea ref={textRef} />
      <input type="submit" onClick={submitHandler}/>
    </form>
  );
};
export default NewTodo;
