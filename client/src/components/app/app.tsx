import { FC } from "react";
import styles from "./app.module.css";
import { MyButton } from "../ui/button/mybutton";

const App: FC = () => {
    return (
        <div className={styles.app}>
            <h1>
                <MyButton type="primary">Нажми меня</MyButton>
            </h1>
        </div>
    );
};

export default App;
