import { FC, MouseEventHandler } from "react";
import styles from "./mybutton.module.css";

interface MyButtonProps {
    children: React.ReactNode;
    type: "primary" | "secondary";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MyButton: FC<MyButtonProps> = ({ children, type, onClick }) => {
    return (
        <button
            className={`${styles.myButton} ${
                type === "primary" ? styles.blue : styles.green
            }`}
            onClick={onClick ? onClick : () => {}}
        >
            {children}
        </button>
    );
};
export { MyButton };
