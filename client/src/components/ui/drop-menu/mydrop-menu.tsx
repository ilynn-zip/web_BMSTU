import { FC } from "react";
import styles from "./mydrop-menu.module.css";

interface MyDropMenuProps {
    id?: string;
    options?: string[];
    title?: string;
}

const MyDropMenu: FC<MyDropMenuProps> = ({
    id,
    options = ["test", "test", "test"],
    title = "Заголовок",
}) => {
    return (
        <div className={styles.mySelectWrapper}>
            <p className={styles.mySelectTitle}>{title}</p>
            <select id={id} className={styles.mySelect}>
                {options.map((el) => {
                    return <option key={el}>{el}</option>;
                })}
            </select>
        </div>
    );
};
export { MyDropMenu };
