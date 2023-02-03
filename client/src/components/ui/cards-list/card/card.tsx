import { FC } from "react";
import { MyButton } from "../../button/mybutton";
import pic from "../../../../img/test.jpg";
import styles from "./card.module.css";
import { TPet, TPetInfo } from "../../../../types/types";

interface CardProps {
    pet: TPet;
    petInfo: TPetInfo;
}

const Card: FC<CardProps> = ({ pet, petInfo }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardImgWrapper}>
                <img src={pic} width={319} height={223} />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardOption}>
                    <p>Вид</p> <p>{petInfo.pet_breed}</p>
                </div>
                <div className={styles.cardOption}>
                    <p>Возраст</p> <p>{petInfo.age}</p>
                </div>
                <div className={styles.cardOption}>
                    <p>Цена</p> <p>{pet.price}$</p>
                </div>
            </div>
            <MyButton skin='primary'>Оформить заказ</MyButton>
        </div>
    );
};
export { Card };
