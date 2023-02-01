import { FC } from "react";
import styles from "./vendor-orders.module.css";
import { CancelIcon, EditIcon } from "../../ui/icons/icons";
import { MyTable } from "../../ui/table/mytable";
interface VendorOrdersProps {}

const VendorOrders: FC<VendorOrdersProps> = ({}) => {
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
    return <MyTable skin='primary' tableData={tableData} />;
};
export { VendorOrders };
