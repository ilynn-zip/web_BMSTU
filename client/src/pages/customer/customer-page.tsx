import { FC } from "react";
import styles from "./customer-page.module.css";
import { useLocation } from "react-router-dom";
import { Profile } from "../../components/customer/profile/profile";
import { MyTable } from "../../components/ui/table/mytable";
import { CancelIcon, EditIcon } from "../../components/ui/icons/icons";
import { CustomerOrders } from "../../components/customer/customer-orders/customer-orders";

interface CustomerMenuPageProps {}

const CustomerMenuPage: FC<CustomerMenuPageProps> = ({}) => {
    const { pathname } = useLocation();
    const testHead = ["Хуй", "Хуй", "Хуй", "Хуй"];
    const testBody = [
        ["Хуй", "Хуй", "Хуй", "Хуй"],
        ["Хуй", "Хуй", "Хуй", "Хуй"],
        ["Хуй", "Хуй", "Хуй", "Хуй"],
    ];
    const testButtons = [
        {
            title: "сделать покупателем",
            onClick: () => {
                console.log("теперь ты покупатель, ЛОХ");
            },
        },
        {
            title: "сделать продавцом",
            onClick: () => {
                console.log("теперь ты продавец, ПИДР");
            },
        },
    ];
    const testIcons = [
        <CancelIcon
            color='#CD2727'
            size='50'
            onClick={() => {
                console.log("cancel");
            }}
        />,
        <EditIcon
            color='#000'
            size='50'
            onClick={() => {
                console.log("cancel");
            }}
        />,
    ];

    const tableData = {
        head: testHead,
        body: testBody,
        buttons: testButtons,
        icons: testIcons,
    };
    return (
        <>
            {pathname === "/customer" && <Profile />}
            {pathname === "/customer/orders" && <CustomerOrders />}
        </>
    );
};
export { CustomerMenuPage };
