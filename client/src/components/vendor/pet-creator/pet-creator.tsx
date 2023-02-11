import { FC } from "react";
import styles from "./pet-creator.module.css";
import { MyInput } from "../../ui/input/myinput";
import { MyDropMenu } from "../../ui/drop-menu/mydrop-menu";
import { MyCheckbox } from "../../ui/check-box/mycheckbox";
import { MyButton } from "../../ui/button/mybutton";
import { useSelector } from "react-redux";
import { TPetsState } from "../../../services/reducers/pets/pets";
import { TShop, TStore } from "../../../types/types";
import { TPetCreatorState } from "../../../services/reducers/pet-creator/pet-creator";
import { boundPetCreator } from "../../../services/actions/pet-creator";
import { createPet } from "../../../utils/vendor-api";
interface PetsCreatorProps {}

//TODO          содержимое формы должно записываться в localstorege при размонтировании и доставаться
//              из него при монтировании
const PetsCreator: FC<PetsCreatorProps> = () => {
    const { shops } = useSelector<TStore, TPetsState>((store) => store.pets);
    const { pet } = useSelector<TStore, TPetCreatorState>(
        (store) => store.petCreator
    );

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        createPet({ ...pet });
    };

    const setShopId = (selected: any) => {
        const newShop = shops.find((shop) => shop.adress === selected) as TShop;
        boundPetCreator.setPetShopId(newShop.Shop_id);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.petsCreatorWrapper}>
            <div className={styles.leftContent}>
                <span>Создание питомца</span>
                <MyDropMenu
                    id='petType'
                    options={["Cat", "Dog", "Hedgehog", "Raccoon", "Fox"]}
                    title='Вид'
                    changeHandler={boundPetCreator.setPetType}
                />
                <MyDropMenu
                    id='petGender'
                    options={["Male", "Female"]}
                    title='Пол'
                    changeHandler={boundPetCreator.setPetGender}
                />
                <MyDropMenu
                    id='shopAddress'
                    options={[...shops.map((shop) => shop.adress)]}
                    title='Магазины'
                    changeHandler={setShopId}
                />
                <MyCheckbox
                    text='Способность плавать'
                    checked={pet.can_swim === 0 ? false : true}
                    setChecked={() => {
                        boundPetCreator.setPetCanSwin(
                            pet.can_swim === 0 ? 1 : 0
                        );
                    }}
                />
                <MyCheckbox
                    text='Способность плодиться'
                    checked={pet.reproduce_ability === 0 ? false : true}
                    setChecked={() => {
                        boundPetCreator.setPetCanReproduce(
                            pet.reproduce_ability === 0 ? 1 : 0
                        );
                    }}
                />
                <MyButton type='submit' skin='primary'>
                    Добавить питомца
                </MyButton>
            </div>
            <div className={styles.rightContent}>
                <>
                    <p>Имя питомца</p>
                    <MyInput
                        value={pet.name}
                        onChange={(e) => {
                            boundPetCreator.setPetName(e.target.value);
                        }}
                        placeholder='Введите породу'
                    />
                </>
                <>
                    <p>Порода питомца</p>
                    <MyInput
                        value={pet.pet_breed}
                        onChange={(e) => {
                            boundPetCreator.setPetBreed(e.target.value);
                        }}
                        placeholder='Введите текст'
                    />
                </>
                <div>
                    <p>Возраст питомца</p>
                    <MyInput
                        value={pet.age}
                        onChange={(e) => {
                            boundPetCreator.setPetAge(+e.target.value);
                        }}
                        type='number'
                        placeholder='Введите текст'
                    />
                </div>
                <div>
                    <p>Цвет питомца</p>
                    <MyInput
                        value={pet.color}
                        onChange={(e) => {
                            boundPetCreator.setPetColor(e.target.value);
                        }}
                        placeholder='Введите текст'
                    />
                </div>
                <div>
                    <p>Цена питомца</p>
                    <MyInput
                        value={pet.price}
                        onChange={(e) => {
                            boundPetCreator.setPetPrice(+e.target.value);
                        }}
                        type='number'
                        placeholder='Введите текст'
                    />
                </div>
            </div>
        </form>
    );
};
export { PetsCreator };
