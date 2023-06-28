import { ReactElement } from "react"

interface Props {
    children : Array<string>;
    color: string;
}
const FancyBorder = ({children, color}: Props): ReactElement => {
return (
    <div className={`'FancyBorder FanyBorder-'${color}` }>
        {children}
    </div>
)
} 