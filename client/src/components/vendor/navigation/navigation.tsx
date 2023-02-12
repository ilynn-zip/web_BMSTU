import { FC } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../../ui/button/mybutton";
import styles from "./navigation.module.css";
import { boundPetCreator } from "../../../services/actions/pet-creator";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
    return (
        <div className={styles.buttonsWrapper}>
            <MyButton skin='secondary'>
                <Link className={styles.myLink} to='/vendor/orders'>
                    Проверить заказы
                </Link>
            </MyButton>
            <MyButton skin='secondary'>
                <Link onClick={() => {boundPetCreator.setPetCreatorMode("Create")}} className={styles.myLink} to='/vendor/petsCreation'>
                    Добавить питомца
                </Link>
            </MyButton>
            <MyButton skin='secondary'>
                <Link className={styles.myLink} to='/vendor/pets'>
                    Редактировать питомцев
                </Link>
            </MyButton>
        </div>
    );
};
export { Navigation };
