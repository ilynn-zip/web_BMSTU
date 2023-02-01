import { FC } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../../ui/button/mybutton";
import styles from "./profile.module.css";
interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
    return (
        <div className={styles.CustomerMenuPageContent}>
            <p>Профиль</p>
            <div className={styles.infoWrapper}>
                <div className={styles.infoLine}>
                    <p>Имя</p> <p>Валерий</p>
                </div>
                <div className={styles.infoLine}>
                    <p>Фамилия</p> <p>Иванов</p>
                </div>
                <div className={styles.infoLine}>
                    <p>Телефон</p> <p>8 800 555 35 35</p>
                </div>
            </div>
            <div className={styles.buttonsWrapper}>
                <MyButton skin='secondary'>
                    <Link className={styles.Link} to={"/customer/orders"}>
                        Мои заказы
                    </Link>
                </MyButton>
                <MyButton skin='secondary'>Выйти из профиля</MyButton>
            </div>
        </div>
    );
};
export { Profile };
