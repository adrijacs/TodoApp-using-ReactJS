import styles from "./AddTodo.module.css";
import { MdOutlineAddComment } from "react-icons/md";
import { useRef } from "react";

function AddTodo({ handleAdd }) {
  let todoName = useRef("");
  let todoDate = useRef("");
  return (
    <>
      <div className="container">
        <form
          className={`row ${styles["adr-row"]}`}
          onSubmit={(event) => handleAdd(event, todoName, todoDate)}
        >
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter TODO Here"
              ref={todoName}
            ></input>
          </div>
          <div className="col-4">
            <input type="date" ref={todoDate} />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className={`btn btn-success ${styles["adr-button"]}`}
            >
              <MdOutlineAddComment />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
