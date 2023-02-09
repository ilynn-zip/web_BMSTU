import { FC } from "react";
import styles from "./customer-page.module.css";
import { useLocation } from "react-router-dom";
import { Profile } from "../../components/customer/profile/profile";
import { CustomerOrders } from "../../components/customer/customer-orders/customer-orders";

interface CustomerMenuPageProps {}

const CustomerMenuPage: FC<CustomerMenuPageProps> = ({}) => {
    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/customer" && <Profile />}
            {pathname === "/customer/orders" && <CustomerOrders />}
        </>
    );
};
export { CustomerMenuPage };
