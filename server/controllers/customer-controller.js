const dbPets = require("../dbHandler/db-pets");
const dbShop = require("../dbHandler/db-shop");
const { serverAnswer } = require("../models/serverModels");

class customerController {
    async getPets(request, response) {
        let result;
        let answer;
        try {
            await dbPets.getPetsWithInfo().then((pets) => {
                result = pets;
            });

            answer = serverAnswer(true, "OK", [...result]);
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }
    async getShops(request, response) {
        let result;
        let answer;
        try {
            await dbShop.getShops().then((shops) => {
                result = shops;
            });

            answer = serverAnswer(true, "OK", [...result]);
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }
}

module.exports = new customerController();
