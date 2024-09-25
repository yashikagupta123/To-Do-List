import "./App.css";
import { useState, useRef, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToDoCard from "./components/ToDoCard";
import InputCard from "./components/InputCard";

function App() {
  const [toDoTask, setToDoTask] = useState("");
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef();

  const getInput = (event) => {
    setToDoTask(event.target.value);
  };
  let flag = 101; //unique Id tracker
  let time = `${new Date().getDate()}/${
    new Date().getMonth() + 1
  }/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  /**
   * this function is used to fetch the toDos and formatting it.
   */
  const getData = () => {
    const trimmedTask = toDoTask.trim();
    const existingTask = toDos.find((task) => {
      console.log({ task, trimmedTask });
      return task.toDoTitle.toUpperCase() === trimmedTask.toUpperCase();
    });
    if (trimmedTask === "" || existingTask) {
      setToDoTask("");
      if (trimmedTask === "") {
        toast.error("!INVALID INPUT 😒", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      } else {
        toast.error("!Task Is Already In The List 🥲", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      }
    } else {
      let store = [
        ...toDos,
        { toDoTitle: toDoTask, id: flag, createdAt: time },
      ];
      flag++;
      setToDos(store);
      setToDoTask("");
      localStorage.setItem(
        "yourToDos",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("yourToDos")),
          {
            toDoTitle: toDoTask,
            id: flag,
            createdAt: time,
          },
        ])
      );
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const value = localStorage.getItem("yourToDos");
    if (value === null) {
      localStorage.setItem("yourToDos", JSON.stringify([]));
    }
    const parsedValue = JSON.parse(value);
    setToDos(parsedValue ? parsedValue : []);
  }, []);

  const deleteTask = (index) => {
    let filterData = toDos.filter((element, id) => id !== index);
    setToDos(filterData);
    localStorage.setItem("yourToDos", JSON.stringify(filterData));
  };

  const clearTask = () => {
    setToDos([]);
    localStorage.setItem("yourToDos", JSON.stringify([]));
  };
  /**
   * Define a function to render the list of tasks
   * @returns transforming the toDos array into a list of JSX elements
   */
  const renderTasks = () => {
    return toDos.map((curVal, index) => (
      <ToDoCard
        curVal={curVal}
        index={index}
        deleteBtnClickHandler={() => deleteTask(index)}
      />
    ));
  };

  const localStorageValue = localStorage.getItem("yourToDos");
  console.log(JSON.parse(localStorageValue));

  return (
    <div className="bg-[#f4f4f4] min-h-36 max-w-[600px] mx-auto my-0 p-5 font-ArialSansSerif rounded-[20px] ">
      <p className=" text-[2.125rem] font-bold text-ashGray font-serif text-center ">
        To Do List
      </p>
      <div className="flex justify-center items-center mb-5 ">
        <InputCard
          toDoTask={toDoTask}
          getInput={getInput}
          inputRef={inputRef}
        />

        <FaPlusCircle
          onClick={getData}
          className="text-[#d078cc] rounded-s-[40px] cursor-pointer text-3xl hover:text-[#c2bec7]"
        />
        <img
          className="w-8 h-8 m-3 cursor-pointer"
          onClick={() => clearTask()}
          src={require("./assets/news.png")}
          alt="clear-all"
        />
      </div>

      <div className="flex flex-row flex-wrap gap-[10px] w-[100%] ">
        {renderTasks()}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
}

export default App;
