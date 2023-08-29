"use client";

interface ButtonProps {
    text: string;
    style: string;
    onClickHandle: () => void;
}

const Button : React.FC<ButtonProps> = ({text , style , onClickHandle}) => {
    return (
        <button onClick={() => {onClickHandle}} className={style}>
            {text}
        </button>
    );
}
 
export default Button;