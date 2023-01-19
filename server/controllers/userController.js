const db = require("../dbHandler/dbUsers");

class userController {
    async getUsers(request, response) {
        let result;
        await db.getUsers().then((data) => {
            result = data;
        });
        console.log(result);
        return response.json(result);
    }

    async addUser(request, response) {
        await db.addUser(request.body);
        return response.json("user was added!");
    }

    async getUserByLogin(request, response) {
        let result;
        await db
            .getUserByLogin(request.body)
            .then((data) => (result = data))
            .catch((err) => console.log(err));
        console.log(result);
        return response.json(result);
    }

    async getUserById(request, response) {
        let result;
        await db
            .getUserById(request.body)
            .then((data) => (result = data))
            .catch((err) => console.log(err));
        console.log(result);
        return response.json(result);
    }

    async deleteUserById(request, response) {
        let result;
        console.log(request.params);
        await db
            .deleteUserById(request.params)
            .then((data) => (result = data))
            .catch((err) => console.log(err));
        return response.json(result);
    }
}

module.exports = new userController();
