import { FC, useEffect, useState } from "react";
import styles from "./home-page.module.css";
import { CardsList } from "../../components/ui/cards-list/cards-list";
import { Filter } from "../../components/filter/filter";
import { TPets } from "../../types/types";
import { getPets } from "../../utils/customer-api";
interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
    const [pets, setPets] = useState<TPets>({ pets: [], petsInfo: [] });
    useEffect(() => {
        getPets()
            .then((data) => {
                console.log(data);
                setPets(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className={styles.homePageWrapper}>
            <Filter list={pets} changeList={setPets} />
            <CardsList pets={pets} />
        </div>
    );
};
export { HomePage };
