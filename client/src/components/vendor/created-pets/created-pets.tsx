import { FC, useEffect, useState } from "react";
import styles from "./created-pets.module.css";
import { useSelector } from "react-redux";
import { TPetsState } from "../../../services/reducers/pets/pets";
import { TUserState } from "../../../services/reducers/user/user";
import {
    TPet,
    TStore,
    TTableData,
    TTableIcon,
    TUserClient,
} from "../../../types/types";
import { refuseOrder } from "../../../utils/customer-api";
import {
    getShopOrders,
    acceptOrder,
    getShopPets,
    deletePet,
} from "../../../utils/vendor-api";
import {
    CancelIcon,
    ApproveIcon,
    DeleteIcon,
    EditIcon,
} from "../../ui/icons/icons";
import { MyTable } from "../../ui/table/mytable";
import { boundPetCreator } from "../../../services/actions/pet-creator";
import { Redirect } from "react-router";
interface CreatedPetsProps {}

const CreatedPets: FC<CreatedPetsProps> = ({}) => {
    const { users, user } = useSelector<TStore, TUserState>(
        (store) => store.user
    );
    const { shops, pets } = useSelector<TStore, TPetsState>(
        (store) => store.pets
    );
    const [toggleRedirect, setToggleRedirect] = useState<boolean>(false);
    const [tableData, setTableData] = useState<TTableData>({
        head: [
            "ID питомца",
            "Имя питомца",
            "Пол питомца",
            "Вид питомца",
            "Цена",
        ],
        body: [],
        icons: [
            { icon: <DeleteIcon size='50' />, onClickFns: [] },
            { icon: <EditIcon size='50' />, onClickFns: [] },
        ],
    });

    useEffect(() => {
        getShopPets(
            {
                ...shops.find((shop) => shop.adress === user.address),
            }.Shop_id as number
        ).then((data) => {
            let newIcons: TTableIcon[] = [];

            if (tableData.icons) {
                newIcons = [...tableData.icons];
            }

            let shopPets = data.map(
                (el: any) =>
                    pets.find((pet) => pet.pet_id === el.pet_id) as TPet
            );

            const newBody: string[][] = shopPets.map((shopPet: TPet) => {
                newIcons[0].onClickFns.push(() => {
                    deletePet(shopPet.pet_id);
                });
                newIcons[1].onClickFns.push(() => {
                    boundPetCreator.setPetCreatorMode("Update");
                    boundPetCreator.setPet(shopPet);
                    localStorage.setItem(
                        "petCreationForm",
                        JSON.stringify(shopPet)
                    );
                    setToggleRedirect(true);
                });

                return [
                    shopPet.pet_id,
                    shopPet.name,
                    shopPet.gender,
                    shopPet.pet_type,
                    shopPet.price + " $",
                ];
            });
            setTableData({
                ...tableData,
                body: [...newBody],
                icons: [...newIcons],
            });
        });
    }, [users]);

    if (toggleRedirect) return <Redirect to={"/vendor/petsCreation"} />;

    return <MyTable skin='secondary' tableData={tableData} />;
};
export { CreatedPets };
