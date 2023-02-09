const dbPets = require("../dbHandler/db-pets");
const dbShop = require("../dbHandler/db-shop");
const dbOrders = require("../dbHandler/db-orders");
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

    async createOrder(request, response) {
        let answer;
        try {
            console.log(request.body);
            await dbOrders.createOrder(request.body);
            await dbPets.changePetAvailability(request.body.petId, "no");

            answer = serverAnswer(true, "Order Created", {});
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }

    async getCustomerOrders(request, response) {
        let answer;
        let result = [];
        try {
            await dbOrders.getOrderedPets(request.body.user_id).then((data) => {
                result = data;
                console.log(data);
            });

            answer = serverAnswer(true, "OK", result);
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }
}

module.exports = new customerController();
