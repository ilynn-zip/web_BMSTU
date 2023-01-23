import { FC } from "react";
import styles from "./mybutton.module.css";

interface MyButtonProps {
    children: React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children }) => {
    return <button className={styles.myButton}>{children}</button>;
};
export { MyButton };
