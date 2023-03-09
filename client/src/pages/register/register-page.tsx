import { FC, FormEventHandler } from "react";
import styles from "./register-page.module.css";
import { MyInput } from "../../components/ui/input/myinput";
import { MyButton } from "../../components/ui/button/mybutton";
import { Link } from "react-router-dom";
import { register } from "../../utils/user-api";
import { useForm } from "../../hooks/useForm";

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = ({}) => {
    const { values, handleChange } = useForm({
        name: "",
        surname: "",
        telephone: "",
        login: "",
        password: "",
    });
    const onFormSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        register(values);
    };
    return (
        <form onSubmit={onFormSubmit} className={styles.RegisterPageContent}>
            <p>Регистрация</p>
            <div className={styles.inputsWrapper}>
                <MyInput
                    value={values.name}
                    onChange={handleChange}
                    name='name'
                    placeholder='Имя'
                    type={"text"}
                />
                <MyInput
                    value={values.surname}
                    onChange={handleChange}
                    name='surname'
                    placeholder='Фамилия'
                    type={"text"}
                />
                <MyInput
                    value={values.telephone}
                    onChange={handleChange}
                    name='telephone'
                    placeholder='Телефон'
                    type={"tel"}
                />
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
                <MyButton skin='primary'>Зарегистрироваться</MyButton>
                <Link className={styles.Link} to={"/login"}>
                    <MyButton skin='primary'>Назад</MyButton>
                </Link>
            </div>
        </form>
    );
};
export { RegisterPage };
