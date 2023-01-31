import { FC } from "react";
import styles from "./app.module.css";
import { MyButton } from "../ui/button/mybutton";
import { MyHeader } from "../ui/header/myheader";
import { MyFooter } from "../ui/footer/myfooter";
import { MyInput } from "../ui/input/myinput";
import { MyCheckbox } from "../ui/check-box/mycheckbox";

const App: FC = () => {
    return (
        <div className={styles.app}>
            <MyHeader type='admin' />
            <form className={styles.content}>
                <MyButton skin='primary'>Нажми меня</MyButton>
                <MyButton skin='secondary'>Зарегистрироваться</MyButton>

                <MyInput placeholder='Логин' type={"email"} required />
                <MyInput placeholder='Пароль' type={"password"} required />
                <MyCheckbox text='Способность плавать' />
            </form>
            <MyFooter type='admin' />
        </div>
    );
};

export default App;
