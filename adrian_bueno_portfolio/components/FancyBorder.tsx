import { ReactElement, useReducer } from "react";

interface Button {
  onClick: () => {};
  children: Array<string>;
  icon: Element;
}
interface Props {
  children: Array<string>;
  color: string;
}

interface Props {
  type: string;
}

const reducer = (state: any, action: Props) => {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
};

const MyComponent = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, { age: 43 });

  return <div className="bg-light"></div>;
};

const Button = ({ onClick, children }: Button) => (
  <button onClick={onClick}>{children}</button>
);

const FancyBorder = ({ children, color }: Props): ReactElement => {
  return <div className={`'FancyBorder FanyBorder-'${color}`}>{children}</div>;
};
export default FancyBorder;
