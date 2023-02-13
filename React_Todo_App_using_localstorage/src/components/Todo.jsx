import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const getData = () => {
  let list = localStorage.getItem("todo");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("todo"));
  } else {
    return [];
  }
};

export const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState(getData());

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    const Todo = {
      title: text,
      status: false,
      id: nanoid(4)
    };
    setData([...data, Todo]);
    setText("");
  };
  const handleToggle = (e) => {
    setData(
      data.map((el) => {
        if (e.id === el.id) {
          return {
            ...el,
            status: !el.status
          };
        }
        return el;
      })
    );
  };

  const handleDelete = (e) => {
    setData(
      data.filter((el) => {
        return e.id !== el.id;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [data]);
  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter a Todo"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {data.map((e) => (
          <div key={e.id}>
            <p>{e.title}</p>
            <p>{e.status ? "Completed" : "Not Completed"}</p>
            <button
              onClick={() => {
                handleToggle(e);
              }}
            >
              Toggle Status
            </button>
            <button
              onClick={() => {
                handleDelete(e);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
