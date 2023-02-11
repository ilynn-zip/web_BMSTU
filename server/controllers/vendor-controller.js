const { serverAnswer } = require("../models/serverModels");
const dbPets = require("../dbHandler/db-pets");

class vendorController {
    async createPet(request, response) {
        let result;
        let answer;
        try {
            console.log("Create Pet");
            await dbPets.getPetNewId().then((index) => {
                result = index;
            });
            const { pet_id, shop_id, price } = request.body;
            let new_pet_id = result + 1;

            await dbPets
                .addPet({ pet_id: new_pet_id, shop_id, price })
                .then((data) => {
                    console.log(data);
                });

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
            await dbPets
                .addPetInfo({
                    pet_id: new_pet_id,
                    pet_type,
                    name,
                    age,
                    color,
                    can_swim,
                    reproduce_ability,
                    gender,
                    pet_breed,
                })
                .then((data) => {
                    console.log(data);
                });
            answer = serverAnswer(true, "Pet was Added", {});
        } catch (error) {
            answer = serverAnswer(false, `${error}`, {});
            console.log(error);
        }
        return response.json(answer);
    }
}
module.exports = new vendorController();
