const dbUsers = require("../dbHandler/db-users");
const { serverAnswer } = require("../models/serverModels");

class userController {
    async getUsers(request, response) {
        let result;
        let answer;
        try {
            await dbUsers.getUsers().then((data) => {
                result = data;
            });
            answer = serverAnswer(true, "OK", [...result]);
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }

    async register(request, response) {
        let answer, result;
        try {
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
            });
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }

    async auth(request, response) {
        console.log(request.body);
        let result;
        try {
            await dbUsers.getUserByLogin(request.body["login"]).then((data) => {
                console.log(data);
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
        return response.json(
            serverAnswer(true, "Successfully authorized", {
                user_id: result.user_id,
                login: result.login,
                name: result.name,
                surname: result.surname,
                role: result.role,
                telephone: result.telephone,
            })
        );
    }
}

module.exports = new userController();
