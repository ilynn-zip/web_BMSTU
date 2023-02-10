import { FC, useState } from "react";
import styles from "./pet-creator.module.css";
import { MyInput } from "../../ui/input/myinput";
import { MyDropMenu } from "../../ui/drop-menu/mydrop-menu";
import { MyCheckbox } from "../../ui/check-box/mycheckbox";
import { MyButton } from "../../ui/button/mybutton";
import { useSelector } from "react-redux";
import { TPetsState } from "../../../services/reducers/pets/pets";
import { TStore } from "../../../types/types";
interface PetsCreatorProps {}

const PetsCreator: FC<PetsCreatorProps> = ({}) => {
    const { pets, shops } = useSelector<TStore, TPetsState>(
        (store) => store.pets
    );
    const [canSwim, setCanSwim] = useState<0 | 1>(0);
    const [canReproduce, setCanReproduce] = useState<0 | 1>(0);
    return (
        <form className={styles.petsCreatorWrapper}>
            <div className={styles.leftContent}>
                <span>Создание питомца</span>
                <MyDropMenu
                    id='petType'
                    options={["Cat", "Dog", "Hedgehog", "Raccoon", "Fox"]}
                    title='Вид'
                />
                <MyDropMenu
                    id='petGender'
                    options={["Male", "Female"]}
                    title='Пол'
                />
                <MyDropMenu
                    id='shopAddress'
                    options={[...shops.map((shop) => shop.adress)]}
                    title='Магазины'
                />
                <MyCheckbox
                    text='Способность плавать'
                    checked={canSwim === 0 ? false : true}
                    setChecked={() => {
                        setCanSwim(canSwim === 0 ? 1 : 0);
                    }}
                />
                <MyCheckbox
                    text='Способность плодиться'
                    checked={canReproduce === 0 ? false : true}
                    setChecked={() => {
                        setCanReproduce(canReproduce === 0 ? 1 : 0);
                    }}
                />
                <MyButton type='submit' skin='primary'>
                    Добавить питомца
                </MyButton>
            </div>
            <div className={styles.rightContent}>
                <>
                    <p>Порода питомца</p>
                    <MyInput placeholder='Введите породу' />
                </>
                <>
                    <p>Цена питомца</p>
                    <MyInput type='number' placeholder='Введите текст' />
                </>
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
