const dbPets = require("../dbHandler/db-pets");
const dbShop = require("../dbHandler/db-shop");
const { serverAnswer } = require("../models/serverModels");

class customerController {
    async getPets(request, response) {
        let result = [];
        let answer;
        try {
            await dbPets.getPets().then((pets) => {
                result[0] = pets;
            });

            await dbPets.getPetsInfo().then((petsInfo) => {
                result[1] = petsInfo;
            });
            answer = serverAnswer(true, "OK", {
                pets: result[0],
                petsInfo: result[1],
            });
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
