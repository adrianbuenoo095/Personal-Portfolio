import { ReactElement } from "react"

interface Button {
    onClick: ()=>{};
    children: Array<string>
}
interface Props {
    children : Array<string>;
    color: string;
}

const Button =  ({onClick, children}: Button) => <button onClick={onClick}>{children}</button>;

const FancyBorder = ({children, color}: Props): ReactElement => {
return (
    <div className={`'FancyBorder FanyBorder-'${color}` }>
        {children}
    </div>
)
} 
export default FancyBorder;