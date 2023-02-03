import { FC } from "react";
import { Card } from "./card/card";
import styles from "./cards-list.module.css";

interface CardsListProps {}

const CardsList: FC<CardsListProps> = ({}) => {
    return (
        <div className={styles.CardsListWrapper}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};
export { CardsList };
