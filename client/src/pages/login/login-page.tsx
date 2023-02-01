import { FC } from "react";
import { MyInput } from "../../components/ui/input/myinput";
import { MyButton } from "../../components/ui/button/mybutton";
import styles from "./login-page.module.css";
import { Link } from "react-router-dom";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
    return (
        <div className={styles.LoginPageContent}>
            <p>Авторизация</p>
            <div className={styles.inputsWrapper}>
                <MyInput placeholder='Логин' type={"email"} />
                <MyInput placeholder='Пароль' type={"password"} />
            </div>
            <div className={styles.buttonsWrapper}>
                <MyButton skin='secondary'>Вход</MyButton>
                <MyButton skin='secondary'>
                    <Link className={styles.Link} to={"/register"}>
                        Регистрация
                    </Link>
                </MyButton>
            </div>
        </div>
    );
};
export { LoginPage };
