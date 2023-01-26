import { FC } from "react";
import styles from "./myinput.module.css";

interface MyInputProps {
    placeholder: string;
}

const MyInput: FC<MyInputProps> = ({ placeholder }) => {
    return <input className={`${styles.myInput}`} placeholder={placeholder} />;
};
export { MyInput };
