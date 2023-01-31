import { FC, useState } from "react";
import styles from "./mycheckbox.module.css";
import { ApproveIcon, CancelIcon } from "../icons/icons";

interface MyCheckboxProps {
    text: string;
}

const MyCheckbox: FC<MyCheckboxProps> = ({ text = "something" }) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className={styles.content}>
            <p>{text}</p>
            <div
                className={styles.icons}
                onClick={() => {
                    setChecked(!checked);
                }}
            >
                {checked ? (
                    <ApproveIcon size='50' color='green' />
                ) : (
                    <CancelIcon size='50' color='red' />
                )}
            </div>
        </div>
    );
};
export { MyCheckbox };
