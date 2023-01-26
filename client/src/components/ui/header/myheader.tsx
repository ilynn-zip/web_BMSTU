import { FC } from "react";
import styles from "./myheader.module.css";
import { ProfileIcon } from "../icons/icons";

interface MyHeaderProps {
    type: "admin" | "vendor" | "customer" | "notAuthorized";
}

const MyHeader: FC<MyHeaderProps> = ({ type }) => {
    return (
        <div className={`${styles.myHeader}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.leftCorner}`}>
                    <p>Главная</p>
                    {type === "customer" ||
                    type === "vendor" ||
                    type === "admin" ? (
                        <p>Покупатель</p>
                    ) : (
                        ""
                    )}
                    {type === "vendor" || type === "admin" ? (
                        <p>Продавец</p>
                    ) : (
                        ""
                    )}
                    {type === "admin" ? <p>Администратор</p> : ""}
                </div>
                <div className={`${styles.rightCorner}`}>
                    <ProfileIcon size='50' color='white' />
                    <p>Личный кабинет</p>
                </div>
            </div>
        </div>
    );
};
export { MyHeader };
