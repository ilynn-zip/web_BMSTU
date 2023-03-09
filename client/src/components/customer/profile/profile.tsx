import { FC } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../../ui/button/mybutton";
import styles from "./profile.module.css";
import { boundUser } from "../../../services/actions/user";
import { useSelector } from "react-redux";
import { TStore } from "../../../types/types";
import { TUserState } from "../../../services/reducers/user/user";
interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
    const { user } = useSelector<TStore, TUserState>((store) => store.user);
    return (
        <div className={styles.CustomerMenuPageContent}>
            <p>Профиль</p>
            <div className={styles.infoWrapper}>
                <div className={styles.infoLine}>
                    <p>Имя</p> <p>{user.name}</p>
                </div>
                <div className={styles.infoLine}>
                    <p>Фамилия</p> <p>{user.surname}</p>
                </div>
                <div className={styles.infoLine}>
                    <p>Логин</p> <p>{user.login}</p>
                </div>
                <div className={styles.infoLine}>
                    <p>Роль</p> <p>{user.role}</p>
                </div>
                <div className={styles.infoLine}>
                    <p>Телефон</p> <p>{user.telephone}</p>
                </div>
            </div>
            <div className={styles.buttonsWrapper}>
                <Link className={styles.Link} to={"/customer/orders"}>
                    <MyButton skin='primary'>Мои заказы</MyButton>
                </Link>
                <MyButton
                    onClick={() => {
                        localStorage.removeItem("token");
                        boundUser.logout();
                    }}
                    skin='primary'
                >
                    Выйти из профиля
                </MyButton>
            </div>
        </div>
    );
};
export { Profile };
