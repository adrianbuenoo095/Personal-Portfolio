import { ReactElement, useReducer } from "react";

interface Props {
  type: string;
}

const initialState = {
  age: "",
};

const reducer = (state: { age: string }, action: Props) => {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
};

const Counter = (): ReactElement | null => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
};

export default Counter;
