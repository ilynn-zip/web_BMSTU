import { FC } from "react";
import styles from "./app.module.css";
import { MyButton } from "../ui/button/mybutton";
import { MyHeader } from "../ui/header/myheader";
import { MyFooter } from "../ui/footer/myfooter";
import { MyInput } from "../ui/input/myinput";

const App: FC = () => {
    return (
        <div className={styles.app}>
            <MyHeader type='admin' />
            <h1 className={styles.content}>
                <MyButton
                    type='primary'
                    onClick={() => {
                        console.log("penis");
                    }}
                >
                    Нажми меня
                </MyButton>

                <MyButton type='secondary'>Зарегистрироваться</MyButton>
                <MyInput placeholder='Логин' />
                <MyInput placeholder='Пароль' />
            </h1>
            <MyFooter type='admin' />
        </div>
    );
};

export default App;
