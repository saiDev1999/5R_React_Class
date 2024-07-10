import { useReducer } from "react";
import { initialState, reducer } from "./jsFunctions";

const UseReducerEx2 = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  const addTodoFuntion = () => {
    dispatch({
      type: "ADD_TODO",
      newTodo: "eat break fast at 10am",
    });
  };
  return (
    <>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
          onClick={addTodoFuntion}
        >
          Add Todo
        </button>
        {currentState.todos.map((eachTodo) => (
          <h2>{eachTodo}</h2>
        ))}
      </div>
    </>
  );
};

export default UseReducerEx2;
