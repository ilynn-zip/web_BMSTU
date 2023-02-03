import { FC, useState } from "react";
import styles from "./admin-page.module.css";
import { CancelIcon, EditIcon } from "../../components/ui/icons/icons";
import { MyTable } from "../../components/ui/table/mytable";
import { Modal } from "../../components/ui/modal/modal";
import { MyDropMenu } from "../../components/ui/drop-menu/mydrop-menu";
import { MyButton } from "../../components/ui/button/mybutton";

interface AdminMenuPageProps {}

const AdminMenuPage: FC<AdminMenuPageProps> = ({}) => {
    const [isVisible, setIsVisible] = useState(false);
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
                setIsVisible(true);
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
            <MyTable skin='primary' tableData={tableData} />;
            {isVisible && (
                <Modal
                    onClose={() => {
                        setIsVisible(false);
                    }}
                >
                    <>
                        <MyDropMenu />
                        <div className={styles.buttonsWrapper}>
                            <MyButton skin='primary'>Выбрать</MyButton>
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
