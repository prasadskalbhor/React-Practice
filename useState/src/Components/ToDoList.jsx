import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [title, setTitle] = useState("");

  const [expiryDate, setExpiryDate] = useState("");

  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    setTaskList(JSON.parse(localStorage.getItem("taskList")));
  }, []);
  d;
  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          let newList = [
            ...taskList,
            {
              taskTitle: title,
              taskDate: new Date().toLocaleDateString(),
              expDate: new Date(expiryDate).toLocaleDateString(),
              taskStatus: false,
            },
          ];
          setTaskList(newList);

          localStorage.setItem("taskList", JSON.stringify(newList));
        }}
      >
        <label htmlFor="taskField">Enter new Task -</label>
        <input
          type="text"
          id="textField"
          onInput={(event) => {
            setTitle(event.target.value);
          }}
          required
        />
        <label htmlFor="expiryDate">Expiry Date -</label>
        <input
          type="date"
          name=""
          id=""
          onInput={(event) => {
            setExpiryDate(event.target.value);
          }}
          required
        />
        <button type="submit">Add</button>
      </form>
      <table>
        <tbody>
          <tr>
            <th>Sr. No.</th>
            <th>Task Title</th>
            <th>Date Added</th>
            <th>Expiry Date</th>
            <th>Remark</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
          {Array.from(taskList).map((elm, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{elm.taskTitle}</td>
                <td>{elm.taskDate}</td>
                <td>{elm.expDate}</td>
                <td>{taskCompletion ? Completed : Incomplete}</td>
                <td>
                  <button onClick={() => (taskList[index].taskStatusf = true)}>
                    Completed
                  </button>
                  <button onClick={() => (taskCompletion = false)}>
                    Incomplete
                  </button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
