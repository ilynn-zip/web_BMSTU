const dbUsers = require("../dbHandler/dbUsers");
const answer = require("../models/serverModels");

class userController {
    async getUsers(request, response) {
        let result;
        await dbUsers.getUsers().then((data) => {
            result = data;
        });
        console.log(result);
        return response.json(result);
    }

    async testRequest(request, response) {
        let result;
        try {
            await dbUsersOrders.getOrderedPets(1).then((data) => {
                result = data;
            });
            answer.message = "OK";
            answer.success = true;
            answer.payload = { ...result };
        } catch (error) {
            console.log(error);
            answer.message = `Error: ${error}`;
            answer.success = false;
        }
        return response.json(answer);
    }

    async addUser(request, response) {
        await dbUsers.addUser(request.body);
        return response.json("user was added!");
    }

    async getUserByLogin(request, response) {
        let result;
        await dbUsers
            .getUserByLogin(request.body)
            .then((data) => (result = data))
            .catch((err) => console.log(err));
        console.log(result);
        return response.json(result);
    }

    async getUserById(request, response) {
        let result;
        await dbUsers
            .getUserById(request.body)
            .then((data) => (result = data))
            .catch((err) => console.log(err));
        console.log(result);
        return response.json(result);
    }

    async deleteUserById(request, response) {
        let result;
        console.log(request.params);
        await dbUsers
            .deleteUserById(request.params)
            .then((data) => (result = data))
            .catch((err) => console.log(err));
        return response.json(result);
    }
}

module.exports = new userController();
