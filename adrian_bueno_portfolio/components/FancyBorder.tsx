import { ReactElement, useReducer } from "react";

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

const Counter = (): ReactElement | null => {
    const [state, dispatch] = useReducer(reducer, { age: 34 });

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
