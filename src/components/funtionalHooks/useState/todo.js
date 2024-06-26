import { useState } from "react";

const TodoComponent = () => {
  const initialState = [
    {
      id: 1,
      period: "Morning",
      routine: ["woke up at 8am", "breakfast at 9am", "class at 10am"],
    },
    {
      id: 2,
      period: "AfterNoon",
      routine: ["lunch  at 1pm", "break at 4pm ", "class at 2pm"],
    },
  ];
  const [todos, setTodos] = useState(initialState);
  const addNewTodo = () => {
    const dummyTodo = {
      id: 3,
      period: "Evening",
      routine: ["Snacks  at 5pm", "instagran at 6pm ", "Whatsapp at 7pm-3am"],
    };

    const dummyIncluded = todos.find(
      (eachTodo) => eachTodo.id === dummyTodo.id
    );
    const updatedTodos = [...todos, dummyTodo];
    if (!dummyIncluded) {
      setTodos(updatedTodos);
    }
  };

  const removeRoutingHandler = (each) => {
    const id = each.id;

    const filteredData = todos.filter((eachTodo) => eachTodo.id != id);
    setTodos(filteredData);
  };
  return (
    <>
      <button onClick={addNewTodo}>Add New todo</button>
      {todos.map((each) => {
        return (
          <>
            <h3>{each.period}</h3>
            <button onClick={() => removeRoutingHandler(each)}>
              Remove routine
            </button>
            {each.routine.map((eachRoutine) => {
              return (
                <>
                  <h5>{eachRoutine}</h5>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
};

export default TodoComponent;
