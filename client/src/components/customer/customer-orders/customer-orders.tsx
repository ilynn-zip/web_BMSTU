import { FC, useCallback, useEffect, useState } from "react";
import styles from "./customer-orders.module.css";
import { MyTable } from "../../ui/table/mytable";
import {
    TOrderServer,
    TPet,
    TStore,
    TTableData,
    TTableIcon,
} from "../../../types/types";
import {
    getCustomerOrders,
    getPets,
    refuseOrder,
} from "../../../utils/customer-api";
import { TUserState } from "../../../services/reducers/user/user";
import { useSelector } from "react-redux";
import { TPetsState } from "../../../services/reducers/pets/pets";
import { CancelIcon } from "../../ui/icons/icons";
interface CustomerOrdersProps {}

const CustomerOrders: FC<CustomerOrdersProps> = ({}) => {
    const { user } = useSelector<TStore, TUserState>((store) => store.user);
    const { pets, shops } = useSelector<TStore, TPetsState>(
        (store) => store.pets
    );
    const [isOrderDeleted, setisOrderDeleted] = useState<boolean>(false);
    const [tableData, setTableData] = useState<TTableData>({
        head: [
            "Номер Заказа",
            "Вид питомца",
            "Возраст питомца",
            "Номер телефона",
            "Цена",
            "Адрес Магазина",
        ],
        body: [],
        icons: [{ icon: <CancelIcon color='red' size='50' />, onClickFns: [] }],
    });
    useEffect(() => {
        getTableData();
    }, []);
    //TODO сделать так чтобы при нажатии на отмену заказа, таблица на ходу обновлялась и строка пропадала

    const getTableData = () => {
        getCustomerOrders(user.user_id).then((data: TOrderServer[]) => {
            const filteredPets = pets.filter((pet) => pet.available === "no");

            let orderedPets = data.map((order) => {
                let orderedPet = filteredPets.find((pet) => {
                    if (pet.pet_id === order.pet_id) {
                        pet.order_number = order.order_number;
                        return pet;
                    }
                });
                return orderedPet;
            }) as TPet[];

            orderedPets = orderedPets.filter((pet) => pet !== undefined);
            console.log(orderedPets);

            orderedPets.forEach((pet) => {
                shops.find((shop) => {
                    if (shop.Shop_id === pet.shop_id) {
                        pet.shop_phone = shop.telephone;
                        pet.shop_address = shop.adress;
                    }
                });
            });

            let newIcons: TTableIcon[] = [];
            if (tableData.icons) {
                newIcons = [...tableData.icons];
            }

            const newBody = orderedPets.map((pet, index) => {
                if (tableData.icons) {
                    newIcons[0].onClickFns.push(() => {
                        refuseOrder({
                            pet_id: pet.pet_id,
                            order_number: pet.order_number as number,
                        });
                    });
                }
                return [
                    pet.order_number ? pet.order_number.toString() : "-",
                    pet.pet_type,
                    pet.age.toString(),
                    pet.shop_phone ? pet.shop_phone : "-",
                    pet.price.toString(),
                    pet.shop_address ? pet.shop_address : "-",
                ];
            });

            setTableData({
                ...tableData,
                body: [...newBody],
                icons: [...newIcons],
            });
        });
    };

    return (
        <div>
            <MyTable skin='secondary' tableData={tableData} />
        </div>
    );
};
export { CustomerOrders };
