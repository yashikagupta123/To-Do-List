import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const ToDoCard = (props) => {
  const { curVal, index, deleteBtnClickHandler } = props;
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);

  return (
    <div
      key={curVal.id}
      className="flex items-center justify-between bg-[#fff] p-[10px] border-[1px] border-solid border-[#ddd] rounded-[4px] mb-[10px] w-[45%] cursor-pointer shadow-shadow1 hover:scale-[1.01] transition-[1s] "
    >
      <div className="taskData">
        <p className="m-0 text-[1.32rem]">{curVal.toDoTitle}</p>
      </div>
      <p style={{ marginRight: 20 }}>{curVal.createdAt}</p>
      <MdDelete
        onClick={deleteBtnClickHandler}
        className="text-[#7c5177] border-none cursor-pointer text-[1.8rem] hover:text-[#c2bec7] "
      />
      {/* {isCheckboxSelected ? (
        <MdOutlineCheckBox
          onClick={() => {
            setIsCheckboxSelected(false);
          }}
        />
      ) : (
        <MdOutlineCheckBoxOutlineBlank
          onClick={() => {
            setIsCheckboxSelected(true);
          }}
        />
      )} */}
      <input type="checkbox" />
    </div>
  );
};

export default ToDoCard;
