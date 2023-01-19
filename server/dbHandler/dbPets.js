const mysql = require("mysql2");
const connectionInfo = require("../utils/dbConfig");

class dbPets {
    async getPets() {
        let res;
        const connection = mysql.createConnection(connectionInfo).promise();
        connection.connect((err) => {
            if (err) {
                return console.error("Ошибка: " + err.message);
            } else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });

        return connection
            .execute("SELECT * FROM users")
            .then((result) => {
                return result[0];
            })
            .then((data) => {
                connection.end((err) => {
                    if (err) {
                        return console.log("Ошибка: " + err.message);
                    }
                    console.log("Подключение закрыто");
                });
                return data;
            })
            .catch((err) => console.log(err.message));
    }
}

module.exports = new dbPets();
