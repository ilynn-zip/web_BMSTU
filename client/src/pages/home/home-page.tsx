import { FC, useEffect, useState } from "react";
import styles from "./home-page.module.css";
import { CardsList } from "../../components/ui/cards-list/cards-list";
import { Filter } from "../../components/filter/filter";
import { getPets } from "../../utils/customer-api";
import { TPet, TStore } from "../../types/types";
import { useSelector } from "react-redux";
import { boundPets } from "../../services/actions/pets";
import { TPetsState } from "../../services/reducers/pets/pets";
interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
    const { filteredPets } = useSelector<TStore, TPetsState>(
        (store) => store.pets
    );
    useEffect(() => {
        getPets()
            .then((data: TPet[]) => {
                console.log(data);
                boundPets.setPets(data);
                boundPets.setFilteredPets(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className={styles.homePageWrapper}>
            <Filter />
            <CardsList pets={[...filteredPets]} />
        </div>
    );
};
export { HomePage };
