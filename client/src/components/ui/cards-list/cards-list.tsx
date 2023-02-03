import { FC } from "react";
import { Card } from "./card/card";
import styles from "./cards-list.module.css";
import { TPets } from "../../../types/types";

interface CardsListProps {
    pets: TPets;
}

const CardsList: FC<CardsListProps> = ({ pets }) => {
    return (
        <div className={styles.CardsListWrapper}>
            {pets.pets.map((el, index) => {
                return <Card pet={el} petInfo={pets.petsInfo[index]} />;
            })}
        </div>
    );
};
export { CardsList };
