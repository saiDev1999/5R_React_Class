import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

const reducerFuntion = (state, action) => {
  debugger;
  switch (action.type) {
    case "BOOK_TICKETS":
      return {
        ...state,
        bookedTickets: state.bookedTickets + action.noOfTickets,
        totalAvailableTickets: state.totalAvailableTickets - action.noOfTickets,
      };
    case "HOLD_TICKETS":
      return { ...state, holdTickets: state.holdTickets + action.noOfTickets };
    default:
      return state;
  }
};

const state = {
  totalAvailableTickets: 100,
  bookedTickets: 20,
  holdTickets: 20,
};

const UseReducer = () => {
  const [currentState, dispatch] = useReducer(reducerFuntion, state);

  const bookingFuntion = () => {
    debugger;
    dispatch({
      type: "BOOK_TICKETS",
      noOfTickets: 1,
    });
  };

  const holdingTickerFuntion = () => {
    dispatch({
      type: "HOLD_TICKETS",
      noOfTickets: 1,
    });
  };
  return (
    <>
      <h2>Availble tickets{currentState.totalAvailableTickets}</h2>
      <h2>Booked tickets{currentState.bookedTickets}</h2>
      <h2>Hold tickets{currentState.holdTickets}</h2>

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
        onClick={bookingFuntion}
      >
        Book Ticket
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
        onClick={holdingTickerFuntion}
      >
        Hold Ticket
      </button>
    </>
  );
};

export default UseReducer;
