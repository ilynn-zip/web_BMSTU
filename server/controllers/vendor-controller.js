const serverAnswer = require("../models/serverModels");
const dbPets = require("../dbHandler/db-pets");

class vendorController {
    async createPet(request, response) {
        let result;
        let answer;
        try {
            console.log(request.body);
            dbPets.getPetNewId().then((index) => {
                result = index;
            });
            const { pet_id, shop_id, price } = request.body;
            dbPets.addPet({ pet_id, shop_id, price });

            const {
                pet_type,
                name,
                age,
                color,
                can_swim,
                reproduce_ability,
                gender,
                pet_breed,
            } = request.body;
            dbPets.addPetInfo({
                pet_id,
                pet_type,
                name,
                age,
                color,
                can_swim,
                reproduce_ability,
                gender,
                pet_breed,
            });
            answer = serverAnswer(true, "OK", [...result]);
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
        }
        return response.json(answer);
    }
}
module.exports = new vendorController();
