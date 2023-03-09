import { FC, FormEventHandler } from "react";
import { MyInput } from "../../components/ui/input/myinput";
import { MyButton } from "../../components/ui/button/mybutton";
import styles from "./login-page.module.css";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { auth } from "../../utils/user-api";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
    const { values, handleChange } = useForm({
        login: "",
        password: "",
    });
    const onFormSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        auth(values);
    };
    return (
        <form onSubmit={onFormSubmit} className={styles.LoginPageContent}>
            <p>Авторизация</p>
            <div className={styles.inputsWrapper}>
                <MyInput
                    value={values.login}
                    onChange={handleChange}
                    name='login'
                    placeholder='Логин'
                    type={"text"}
                />
                <MyInput
                    value={values.password}
                    onChange={handleChange}
                    name='password'
                    placeholder='Пароль'
                    type={"password"}
                />
            </div>
            <div className={styles.buttonsWrapper}>
                <MyButton skin='primary'>Вход</MyButton>
                <Link className={styles.Link} to={"/register"}>
                    <MyButton skin='primary'>Регистрация</MyButton>
                </Link>
            </div>
        </form>
    );
};
export { LoginPage };
