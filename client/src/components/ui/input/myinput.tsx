import { FC, HTMLInputTypeAttribute } from "react";
import styles from "./myinput.module.css";

interface MyInputProps {
    placeholder: string;
    type?: HTMLInputTypeAttribute;
    required?: boolean;
}

const MyInput: FC<MyInputProps> = ({ placeholder, type, required }) => {
    return (
        <input
            type={type}
            required={required}
            className={`${styles.myInput}`}
            placeholder={placeholder}
        />
    );
};
export { MyInput };
