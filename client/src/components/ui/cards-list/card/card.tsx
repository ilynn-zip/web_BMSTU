import { FC } from "react";
import { MyButton } from "../../button/mybutton";
import pic from "../../../../img/test.jpg";
import styles from "./card.module.css";

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardImgWrapper}>
                <img src={pic} width={319} height={223} />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardOption}>
                    <p>Вид</p> <p>Такая-то кошка</p>
                </div>
                <div className={styles.cardOption}>
                    <p>Возраст</p> <p>12</p>
                </div>
                <div className={styles.cardOption}>
                    <p>Цена</p> <p>300$</p>
                </div>
            </div>
            <MyButton skin='primary'>Оформить заказ</MyButton>
        </div>
    );
};
export { Card };
