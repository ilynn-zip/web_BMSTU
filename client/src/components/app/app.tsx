import { FC, useEffect } from "react";
import styles from "./app.module.css";
import { MyHeader } from "../header/myheader";
import { MyFooter } from "../footer/myfooter";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "../../pages/login/login-page";
import { RegisterPage } from "../../pages/register/register-page";
import { VendorMenuPage } from "../../pages/vendor/vendor-page";
import { CustomerMenuPage } from "../../pages/customer/customer-page";
import { AdminMenuPage } from "../../pages/admin/admin-page";
import { HomePage } from "../../pages/home/home-page";
import ProtectedRoute from "../protected-route/protected-route";
import { getPets, getShops } from "../../utils/customer-api";
import { getUsers } from "../../utils/user-api";

const App: FC = () => {
    //TODO      добавить тут проверку наличия токена и сделать эндпоинт, который по токену
    //          вернет инфу о пользователе и "авторизует его на клиенте". Не забыть записать
    //          в редакс инфу о пользователе после обращения к эндпоинту. /user/authwithtoken
    //          также сделать проверку на просрочку токена, чтобы пользователя разлогинило и перенесло на
    //          страницу авторизации
    useEffect(() => {
        getPets().then(() => {
            getShops().then(() => {
                getUsers();
            });
        });
    }, []);

    return (
        <div className={styles.app}>
            <MyHeader />
            <div className={styles.appContent}>
                <Switch>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <ProtectedRoute path='/customer' exact isRequiredAuthed>
                        <CustomerMenuPage />
                    </ProtectedRoute>
                    <ProtectedRoute
                        path='/customer/orders'
                        exact
                        isRequiredAuthed
                    >
                        <CustomerMenuPage />
                    </ProtectedRoute>
                    <ProtectedRoute path='/vendor' exact isRequiredAuthed>
                        <VendorMenuPage />
                    </ProtectedRoute>
                    <ProtectedRoute
                        path='/vendor/orders'
                        exact
                        isRequiredAuthed
                    >
                        <VendorMenuPage />
                    </ProtectedRoute>
                    <ProtectedRoute path='/vendor/pets' exact isRequiredAuthed>
                        <VendorMenuPage />
                    </ProtectedRoute>
                    <ProtectedRoute
                        path='/vendor/petsCreation'
                        exact
                        isRequiredAuthed
                    >
                        <VendorMenuPage />
                    </ProtectedRoute>
                    <ProtectedRoute path='/admin' exact isRequiredAuthed>
                        <AdminMenuPage />
                    </ProtectedRoute>
                    <ProtectedRoute path='/register' exact>
                        <RegisterPage />
                    </ProtectedRoute>
                    <ProtectedRoute path='/login' exact>
                        <LoginPage />
                    </ProtectedRoute>
                </Switch>
            </div>
            <MyFooter type='admin' />
        </div>
    );
};

export default App;
