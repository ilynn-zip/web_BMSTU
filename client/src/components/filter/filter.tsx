import { FC, useEffect, useState } from "react";
import styles from "./filter.module.css";
import { MyDropMenu } from "../ui/drop-menu/mydrop-menu";
import { MyCheckbox } from "../ui/check-box/mycheckbox";
import { MyInput } from "../ui/input/myinput";
import { MyButton } from "../ui/button/mybutton";
import { TPets, TShop } from "../../types/types";
import { getShops } from "../../utils/customer-api";
interface FilterProps {
    list: TPets;
    changeList: (list: TPets) => void;
}

const Filter: FC<FilterProps> = ({ list, changeList }) => {
    const [canSwim, setCanSwim] = useState(false);
    const [canReproduce, setCanReproduce] = useState(false);
    const [shops, setShops] = useState<TShop[]>([]);

    useEffect(() => {
        getShops().then((data) => {
            setShops(data);
        });
    }, []);

    const petTypes = ["Cat", "Dog", "Hedgehog", "Raccoon", "Fox"];
    const shopsAdresses = shops.map((el) => {
        return el.adress;
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className={styles.filterWrapper}
        >
            <p className={styles.filterTitle}>Фильтр</p>
            <MyDropMenu options={petTypes} title='Вид' />
            <MyDropMenu options={["Male", "Female"]} title='Пол' />
            <MyDropMenu options={shopsAdresses} title='Магазины' />
            <MyCheckbox
                text='Способность плавать'
                checked={canSwim}
                setChecked={() => {
                    setCanSwim(!canSwim);
                }}
            />
            <MyCheckbox
                text='Способность плодиться'
                checked={canReproduce}
                setChecked={() => {
                    setCanReproduce(!canReproduce);
                }}
            />

            <div className={styles.priceWrapper}>
                <p>Цена</p>
                <div className={styles.inputsWrapper}>
                    <MyInput type='number' name='priceFrom' placeholder='0' />
                    <MyInput type='number' name='priceTo' placeholder='1000' />
                </div>
            </div>
            <MyButton skin='primary'>Поиск</MyButton>
        </form>
    );
};
export { Filter };
