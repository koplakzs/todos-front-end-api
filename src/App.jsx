import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);

  const handleClick = async () => {};
  const handleSubmit = async () => {};
  const onLoad = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/todos/");

    const data = await res.json();
    setTodo(data);
  };
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="bg-info p-5 rounded-4">
      <div className="input d-flex gap-4 mb-5">
        <input
          type="text"
          className="p-2 rounded-3 form-control no-border shadow-none"
          placeholder="Type your task in here"
        />
        <button onClick={handleClick} className="btn btn-primary">
          Add
        </button>
      </div>
      {todo && (
        <div className="data text-center">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {todo?.map((data) => (
                <tr key={data.id}>
                  {" "}
                  <td> {data.task} </td>
                  <td>
                    {data.status === "Pending" ? (
                      <form onSubmit={handleSubmit}>
                        <button className="btn btn-danger">
                          {data.status}{" "}
                        </button>
                      </form>
                    ) : (
                      <button className="btn btn-success">
                        {" "}
                        {data.status}{" "}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
