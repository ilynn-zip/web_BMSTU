import { FC } from "react";
import styles from "./app.module.css";
import { MyHeader } from "../header/myheader";
import { MyFooter } from "../footer/myfooter";
import { CardsList } from "../ui/cards-list/cards-list";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../../pages/login/login-page";
import { RegisterPage } from "../../pages/register/register-page";
import { MyTable } from "../ui/table/mytable";
import { VendorMenuPage } from "../../pages/vendor/vendor-page";
import { CustomerMenuPage } from "../../pages/customer/customer-page";
import { AdminMenuPage } from "../../pages/admin/admin-page";

const App: FC = () => {
    return (
        <div className={styles.app}>
            <MyHeader type='admin' />
            <div className={styles.appContent}>
                <Routes>
                    <Route path='/' element={<CardsList />} />
                    <Route path='/customer' element={<CustomerMenuPage />} />
                    <Route
                        path='/customer/orders'
                        element={<CustomerMenuPage />}
                    />
                    <Route path='/vendor' element={<VendorMenuPage />} />
                    <Route path='/vendor/orders' element={<VendorMenuPage />} />
                    <Route path='/vendor/pets' element={<VendorMenuPage />} />
                    <Route
                        path='/vendor/petsCreation'
                        element={<VendorMenuPage />}
                    />
                    <Route path='/admin' element={<AdminMenuPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </div>
            <MyFooter type='admin' />
        </div>
    );
};

export default App;
