import styles from "./TodoItem.module.css";
import { MdDeleteOutline } from "react-icons/md";
function TodoItem({ todoDate, todoName, handleDelete }) {
  return (
    <>
      <div className="container">
        <div className={`row ${styles["adr-row"]}`}>
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className={`btn btn-danger ${styles["adr-button"]}`}
              onClick={() => {
                handleDelete(todoName, todoDate);
              }}
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
