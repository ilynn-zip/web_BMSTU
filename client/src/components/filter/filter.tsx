import { FC } from "react";
import styles from "./filter.module.css";
import { MyDropMenu } from "../ui/drop-menu/mydrop-menu";
import { MyCheckbox } from "../ui/check-box/mycheckbox";
import { MyInput } from "../ui/input/myinput";
import { MyButton } from "../ui/button/mybutton";
interface FilterProps {}

const Filter: FC<FilterProps> = ({}) => {
    return (
        <div className={styles.filterWrapper}>
            <p className={styles.filterTitle}>Фильтр</p>
            <MyDropMenu />
            <MyDropMenu />
            <MyDropMenu />
            <MyCheckbox text='Способность плавать' />
            <MyCheckbox text='Способность плодиться' />

            <div className={styles.priceWrapper}>
                <p>Цена</p>
                <div className={styles.inputsWrapper}>
                    <MyInput placeholder='asd' />
                    <MyInput placeholder='asd' />
                </div>
            </div>
            <MyButton skin='primary'>Поиск</MyButton>
        </div>
    );
};
export { Filter };
