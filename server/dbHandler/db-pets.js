const MySQLRep = require("./MySQLRep");

class PetMySQLRep extends MySQLRep {
    async getPetsInfo() {
        this.start();

        return this.connection
            .execute("SELECT * FROM `pet_info`")
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async getPetsWithInfo() {
        this.start();

        return this.connection
            .execute(
                "SELECT * from pets JOIN pet_info on pets.pet_id = pet_info.pet_id;"
            )
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async getPets() {
        this.start();

        return this.connection
            .execute("SELECT * FROM `pets`")
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async addPetInfo(payload) {
        this.start();

        return this.connection
            .execute(
                `Insert into pet_info (pet_id, pet_type, name, age, color, can_swim, reproduce_ability, gender, 
                pet_breed) values (${payload.pet_id}, ${payload.pet_type}, ${payload.name}, ${payload.age},
                ${payload.color}, ${payload.can_swim}, ${payload.reproduce_ability}, ${payload.gender}, ${payload.pet_breed}) `
            )
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async addPet(payload) {
        this.start();

        return this.connection
            .execute(
                `Insert into pets (pet_id, shop_id, price) values (${payload.pet_id}, ${payload.shop_id}, ${payload.price})`
            )
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async getPetNewId() {
        this.start();

        return this.connection
            .execute(`Select MAX(pet_id) from pets`)
            .then((res) => {
                return res[0][0]["MAX(pet_id)"];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async getShopIdByPetId(petId) {
        this.start();

        return this.connection
            .execute(`Select * from pets where pet_id = ${petId}`)
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async deletePetById(id) {
        this.start();

        return this.connection
            .execute(`Delete from pets where pet_id = ${id}`)
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async deletePetInfoById(id) {
        this.start();

        return this.connection
            .execute(`Delete from pet_info where pet_id = ${id}`)
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async changePetAvailability(petId, availability) {
        this.start();

        return this.connection
            .execute(
                `Update pets set available = '${availability}' where pet_id = ${petId}`
            )
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async getPetById(id) {
        this.start();

        return this.connection
            .execute(`Select * from pets where pet_id = ${id}`)
            .then((res) => {
                return res[0][0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }
    async getPetInfoById(id) {
        this.start();

        return this.connection
            .execute(`SELECT * FROM pet_info where pet_id = ${id} `)
            .then((res) => {
                return res[0][0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }
}

module.exports = new PetMySQLRep();
