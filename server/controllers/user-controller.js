const dbUsers = require("../dbHandler/db-users");
const { serverAnswer } = require("../models/serverModels");
const { secret } = require("../JWT_config");
const jwt = require("jsonwebtoken");

class userController {
    async getUsers(request, response) {
        let result;
        let answer;
        try {
            await dbUsers.getUsers().then((data) => {
                result = data;
            });
            console.log("getUsers");
            answer = serverAnswer(true, "OK", [...result]);
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }

    async changeRole(request, response) {
        let answer, result;
        try {
            console.log("changeRole");
            dbUsers.changeRole(
                request.body.id,
                request.body.role,
                request.body.address === "NULL" ? null : request.body.address
            );
            answer = serverAnswer(true, "User role was changed!", {});
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }

    async deleteUser(request, response) {
        let answer, result;
        try {
            console.log("deleteUser");
            dbUsers.deleteUserById(request.body);
            answer = serverAnswer(true, "User was deleted!", {});
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }

    async register(request, response) {
        let answer, result;
        try {
            console.log("register");
            await dbUsers.addUser(request.body);
            await dbUsers.getUserByLogin(request.body.login).then((data) => {
                result = { ...data };
            });
            answer = serverAnswer(true, "User was added!", {
                user_id: result.user_id,
                login: result.login,
                name: result.name,
                surname: result.surname,
                role: result.role,
                telephone: result.telephone,
                address: "null",
            });
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }

    async auth(request, response) {
        let result;

        try {
            console.log("auth");
            await dbUsers.getUserByLogin(request.body["login"]).then((data) => {
                result = data;
            });
        } catch (error) {
            return response.json(serverAnswer(false, `${error}`, {}));
        }

        if (!result) {
            return response.json(serverAnswer(false, "User not found!", {}));
        }

        if (result.password !== request.body["password"]) {
            return response.json(serverAnswer(false, "Incorrect password", {}));
        }

        const token = jwt.sign(
            {
                user_id: result.user_id,
                password: result.password,
            },
            secret,
            { expiresIn: "5m" }
        );
        return response.json(
            serverAnswer(true, "Successfully authorized", {
                user_id: result.user_id,
                login: result.login,
                name: result.name,
                surname: result.surname,
                role: result.role,
                telephone: result.telephone,
                address: result.shop_address,
                token,
            })
        );
    }
}

module.exports = new userController();
