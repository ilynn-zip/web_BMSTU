import { FC, useEffect, useState } from "react";
import styles from "./admin-page.module.css";
import { MyTable } from "../../components/ui/table/mytable";
import { Modal } from "../../components/ui/modal/modal";
import { MyDropMenu } from "../../components/ui/drop-menu/mydrop-menu";
import { MyButton } from "../../components/ui/button/mybutton";
import { changeRole, deleteUser, getUsers } from "../../utils/user-api";
import {
    TStore,
    TTableButton,
    TTableData,
    TTableIcon,
    TUserClient,
} from "../../types/types";
import { useSelector } from "react-redux";
import { TPetsState } from "../../services/reducers/pets/pets";
import { TUserState } from "../../services/reducers/user/user";
import { DeleteIcon } from "../../components/ui/icons/icons";

interface AdminMenuPageProps {}

const AdminMenuPage: FC<AdminMenuPageProps> = ({}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [shop, setShop] = useState("NULL");
    const [selectedUser, setSelectedUser] = useState<TUserClient>({
        user_id: 0,
        name: "",
        surname: "",
        login: "",
        role: "customer",
        telephone: "",
        shop_address: "null",
    });
    const { users } = useSelector<TStore, TUserState>((store) => store.user);
    const { shops } = useSelector<TStore, TPetsState>((store) => store.pets);
    const [tableData, setTableData] = useState<TTableData>({
        head: ["ID", "Логин", "Имя", "Роль"],
        body: [],
        buttons: [
            {
                title: "сделать покупателем",
                onClickFns: [],
            },
            {
                title: "сделать продавцом",
                onClickFns: [],
            },
        ],
        icons: [
            { icon: <DeleteIcon size='50' color='black' />, onClickFns: [] },
        ],
    });

    useEffect(() => {
        getUsers().then(() => {
            let newButtons: TTableButton[] = [];
            let newIcons: TTableIcon[] = [];
            if (tableData.buttons) {
                newButtons = [...tableData.buttons];
            }

            if (tableData.icons) {
                newIcons = [...tableData.icons];
            }

            const newBody: string[][] = users.map((user) => {
                newButtons[0].onClickFns.push(() => {
                    changeRole(user.user_id, "customer", "NULL");
                });
                newButtons[1].onClickFns.push(() => {
                    setSelectedUser(user);
                    setIsVisible(true);
                });
                newIcons[0].onClickFns.push(() => {
                    deleteUser(user.user_id);
                });
                return [
                    user.user_id.toString(),
                    user.login,
                    user.name,
                    user.role,
                ];
            });
            setTableData({ ...tableData, body: [...newBody] });
        });
    }, [users]);

    return (
        <>
            <MyTable skin='primary' tableData={tableData} />
            {isVisible && (
                <Modal
                    onClose={() => {
                        setIsVisible(false);
                    }}
                >
                    <>
                        <MyDropMenu
                            options={[
                                "ANY",
                                ...shops.map((shop) => shop.adress),
                            ]}
                            changeHandler={setShop}
                        />
                        <div className={styles.buttonsWrapper}>
                            <MyButton
                                onClick={() => {
                                    changeRole(
                                        selectedUser.user_id,
                                        "vendor",
                                        shop
                                    )
                                        .then(() => {
                                            setIsVisible(false);
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                }}
                                skin='primary'
                            >
                                Выбрать
                            </MyButton>
                            <MyButton
                                onClick={() => {
                                    setIsVisible(false);
                                }}
                                skin='primary'
                            >
                                Отменить
                            </MyButton>
                        </div>
                    </>
                </Modal>
            )}
        </>
    );
};
export { AdminMenuPage };
