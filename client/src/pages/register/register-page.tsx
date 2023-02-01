import { FC } from "react";
import styles from "./register-page.module.css";
import { MyInput } from "../../components/ui/input/myinput";
import { MyButton } from "../../components/ui/button/mybutton";
import { Link } from "react-router-dom";

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = ({}) => {
    return (
        <div className={styles.RegisterPageContent}>
            <p>Регистрация</p>
            <div className={styles.inputsWrapper}>
                <MyInput placeholder='Имя' type={"text"} />
                <MyInput placeholder='Фамилия' type={"text"} />
                <MyInput placeholder='Логин' type={"email"} />
                <MyInput placeholder='Пароль' type={"password"} />
            </div>
            <div className={styles.buttonsWrapper}>
                <MyButton skin='secondary'>Зарегистрироваться</MyButton>
                <MyButton skin='secondary'>
                    <Link className={styles.Link} to={"/login"}>
                        Назад
                    </Link>
                </MyButton>
            </div>
        </div>
    );
};
export { RegisterPage };
