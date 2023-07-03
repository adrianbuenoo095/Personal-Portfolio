import { ReactElement, useMemo, useReducer } from "react";

interface Action {
  type: string;
}

interface State {
  age: number;
}

const reducer = (state: State, action: Action) => {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
};

function greeting() {
  return 'Hello World';
}
const Counter = (): ReactElement | null => {
  const [state, dispatch] = useReducer(reducer, { age: 34 });
  const testingMemo = useMemo(() => greeting(), [state.age]);
  console.log(` helloo world${testingMemo}`);

  return (
    <>
      <button
        className="bg-blue"
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
