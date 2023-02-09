import { FC, useEffect } from "react";
import styles from "./customer-orders.module.css";
import { MyTable } from "../../ui/table/mytable";
import { TStore, TTableData } from "../../../types/types";
import { getCustomerOrders } from "../../../utils/customer-api";
import { TUserState } from "../../../services/reducers/user/user";
import { useSelector } from "react-redux";
interface CustomerOrdersProps {}

const CustomerOrders: FC<CustomerOrdersProps> = ({}) => {
    const { user } = useSelector<TStore, TUserState>((store) => store.user);
    useEffect(() => {
        getCustomerOrders(user.user_id);
    }, []);

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
