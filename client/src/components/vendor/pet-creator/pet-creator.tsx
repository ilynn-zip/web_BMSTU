import { FC } from "react";
import styles from "./pet-creator.module.css";
import { MyInput } from "../../ui/input/myinput";
import { MyDropMenu } from "../../ui/drop-menu/mydrop-menu";
import { MyCheckbox } from "../../ui/check-box/mycheckbox";
import { MyButton } from "../../ui/button/mybutton";
interface PetsCreatorProps {}

const PetsCreator: FC<PetsCreatorProps> = ({}) => {
    return (
        <form className={styles.petsCreatorWrapper}>
            <div className={styles.leftContent}>
                <span>Создание питомца</span>
                <MyDropMenu />
                <MyDropMenu />
                <MyDropMenu />
                <MyCheckbox text='Способность плавать' />
                <MyCheckbox text='Способность плодиться' />
                <MyButton type='submit' skin='primary'>
                    Добавить питомца
                </MyButton>
            </div>
            <div className={styles.rightContent}>
                <div>
                    <p>Имя питомца</p>
                    <MyInput placeholder='Введите текст' />
                </div>
                <div>
                    <p>Имя питомца</p>
                    <MyInput placeholder='Введите текст' />
                </div>
                <div>
                    <p>Имя питомца</p>
                    <MyInput placeholder='Введите текст' />
                </div>
                <div>
                    <p>Имя питомца</p>
                    <MyInput placeholder='Введите текст' />
                </div>
                <div>
                    <p>Имя питомца</p>
                    <MyInput placeholder='Введите текст' />
                </div>
            </div>
        </form>
    );
};
export { PetsCreator };
