import { FC } from "react";
import styles from "./mydrop-menu.module.css";

interface MyDropMenuProps {
    options?: string[];
    title?: string;
}

const MyDropMenu: FC<MyDropMenuProps> = ({
    options = ["test", "test", "test"],
    title = "Заголовок",
}) => {
    return (
        <div className={styles.mySelectWrapper}>
            <p className={styles.mySelectTitle}>{title}</p>
            <select className={styles.mySelect}>
                {options.map((el) => {
                    return <option>{el}</option>;
                })}
            </select>
        </div>
    );
};
export { MyDropMenu };
