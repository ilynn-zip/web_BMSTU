import { FC } from "react";
import styles from "./vendor-page.module.css";
import { useLocation } from "react-router-dom";
import { Navigation } from "../../components/vendor/navigation/navigation";
import { VendorOrders } from "../../components/vendor/vendor-orders/vendor-orders";
interface VendorMenuPageProps {}

const VendorMenuPage: FC<VendorMenuPageProps> = ({}) => {
    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/vendor" && <Navigation />}
            {pathname === "/vendor/orders" && <VendorOrders />}
            {pathname === "/vendor/pets"}
            {pathname === "/vendor/petsCreation"}
        </>
    );
};
export { VendorMenuPage };
