import { FC } from "react";
import styles from "./mybutton.module.css";

interface MyButtonProps {
    children: React.ReactNode;
    type: "primary" | "secondary"
}

const MyButton: FC<MyButtonProps> = ({ children, type }) => {
    return <button className={`${styles.myButton} ${type === "primary" ? styles.blueScheme : styles.greenScheme}`}>{children}</button>;
};
export { MyButton };
