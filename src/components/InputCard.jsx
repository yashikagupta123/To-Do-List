import React from "react";

const InputCard = (props) => {
  const { inputRef, toDoTask, getInput } = props;
  return (
    <input
      className="p-3 border sm:w-[300px] md:w-[350px] lg:w-[400px] 
      xl:[450px] 2xl:w-[500px] border-[#ccc] rounded-[20px] mr-4 inputBox outline-none"
      placeholder="Enter Your Task"
      value={toDoTask}
      onChange={getInput}
      autoFocus
      ref={inputRef}
    />
  );
};

export default InputCard;
