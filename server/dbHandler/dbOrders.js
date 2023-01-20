const MySQLRep = require("../dbHandler/MySQLRep");

class OrdersMySQLRep extends MySQLRep {
    async createOrder(order) {
        this.start();

        return this.connection
            .execute(
                `Insert into orders (user_id, pet_id) values (${order.userId}, ${order.petId})`
            )
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async createOrderWithId(order) {
        this.start();

        return this.connection
            .execute(
                `Insert into orders (order_number, user_id, pet_id) values (${order.order_number}, ${order.userId}, ${order.petId})`
            )
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async getOrderedPets(userId) {
        this.start();

        return this.connection
            .execute(
                `Select pet_id, order_number from orders where user_id = ${userId} `
            )
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async deleteOrderByNumber(number) {
        this.start();

        return this.connection
            .execute(`Delete from orders where order_number = ${number}`)
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    async getOrders() {
        this.start();

        return this.connection
            .execute(`SELECT * FROM orders`)
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }
}

module.exports = new OrdersMySQLRep();
