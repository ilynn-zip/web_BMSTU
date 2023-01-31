import { FC, MouseEventHandler } from "react";
import styles from "./mybutton.module.css";

interface MyButtonProps {
    children: React.ReactNode;
    skin: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MyButton: FC<MyButtonProps> = ({ children, skin, type, onClick }) => {
    return (
        <button
            type={type}
            className={`${styles.myButton} ${
                skin === "primary" ? styles.blue : styles.green
            }`}
            onClick={onClick ? onClick : () => {}}
        >
            {children}
        </button>
    );
};
export { MyButton };
