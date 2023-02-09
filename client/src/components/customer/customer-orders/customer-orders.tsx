import { FC, useEffect, useState } from "react";
import styles from "./customer-orders.module.css";
import { MyTable } from "../../ui/table/mytable";
import { TOrder, TStore, TTableData } from "../../../types/types";
import { getCustomerOrders } from "../../../utils/customer-api";
import { TUserState } from "../../../services/reducers/user/user";
import { useSelector } from "react-redux";
import { TPetsState } from "../../../services/reducers/pets/pets";
interface CustomerOrdersProps {}

const CustomerOrders: FC<CustomerOrdersProps> = ({}) => {
    const { user } = useSelector<TStore, TUserState>((store) => store.user);
    const { pets } = useSelector<TStore, TPetsState>((store) => store.pets);
    const [orders, setOrders] = useState<TOrder[]>([]);

    useEffect(() => {
        getCustomerOrders(user.user_id).then((data) => {
            setOrders(data);
        });
    }, []);
    console.log(orders);
    const orderedPets = orders.map((order) => {
        let orderedPet = pets.find((pet) => {
            if (pet.pet_id === order.petId) return pet;
        });
        console.log(orderedPet);
        return orderedPet;
    });
    console.log(orderedPets);

    const tableData: TTableData = {
        head: [
            "Номер Заказа",
            "Вид питомца",
            "Возраст питомца",
            "Номер телефона",
            "Цена",
            "Адрес Магазина",
        ],
        body: [],
    };
    return (
        <div>
            <MyTable skin='secondary' tableData={tableData} />
        </div>
    );
};
export { CustomerOrders };
