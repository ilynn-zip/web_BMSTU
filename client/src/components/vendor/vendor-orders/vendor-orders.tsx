import { FC, useEffect, useState } from "react";
import styles from "./vendor-orders.module.css";
import { ApproveIcon, CancelIcon } from "../../ui/icons/icons";
import { MyTable } from "../../ui/table/mytable";
import { useSelector } from "react-redux";
import { TPetsState } from "../../../services/reducers/pets/pets";
import { TUserState } from "../../../services/reducers/user/user";
import {
    TUserClient,
    TStore,
    TTableData,
    TTableIcon,
} from "../../../types/types";
import { refuseOrder } from "../../../utils/customer-api";
import { acceptOrder, getShopOrders } from "../../../utils/vendor-api";
interface VendorOrdersProps {}

const VendorOrders: FC<VendorOrdersProps> = ({}) => {
    const { users, user } = useSelector<TStore, TUserState>(
        (store) => store.user
    );
    const { shops, pets } = useSelector<TStore, TPetsState>(
        (store) => store.pets
    );
    const [tableData, setTableData] = useState<TTableData>({
        head: [
            "Номер Заказа",
            "Имя заказчика",
            "Номер телефона",
            "Вид питомца",
            "Цена",
        ],
        body: [],
        icons: [
            { icon: <CancelIcon size='50' color='red' />, onClickFns: [] },
            { icon: <ApproveIcon size='50' color='green' />, onClickFns: [] },
        ],
    });

    useEffect(() => {
        getShopOrders(
            {
                ...shops.find((shop) => shop.adress === user.address),
            }.Shop_id as number
        ).then((orders) => {
            let newIcons: TTableIcon[] = [];

            if (tableData.icons) {
                newIcons = [...tableData.icons];
            }

            const newBody: string[][] = orders.map((order: any) => {
                newIcons[0].onClickFns.push(() => {
                    refuseOrder({
                        order_number: order.order_number,
                        pet_id: order.pet_id,
                    });
                });
                newIcons[1].onClickFns.push(() => {
                    acceptOrder({
                        order_number: order.order_number,
                        pet_id: order.pet_id,
                    });
                });

                const newUser = users.find((user) => {
                    if (user.user_id === order.user_id) return user;
                }) as TUserClient;

                const newPetType = pets.find(
                    (pet) => order.pet_id === pet.pet_id
                )?.pet_type;

                return [
                    order.order_number.toString(),
                    newUser.name,
                    newUser.telephone,
                    newPetType ? newPetType : "",
                    order.price,
                ];
            });
            setTableData({
                ...tableData,
                body: [...newBody],
                icons: [...newIcons],
            });
        });
    }, [pets]);
    return <MyTable skin='secondary' tableData={tableData} />;
};
export { VendorOrders };
