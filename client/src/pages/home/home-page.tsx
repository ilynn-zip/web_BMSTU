import { FC, useEffect } from "react";
import styles from "./home-page.module.css";
import { CardsList } from "../../components/ui/cards-list/cards-list";
import { Filter } from "../../components/filter/filter";
import { getUsers } from "../../utils/user-api";
interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className={styles.homePageWrapper}>
            <Filter />
            <CardsList />
        </div>
    );
};
export { HomePage };
