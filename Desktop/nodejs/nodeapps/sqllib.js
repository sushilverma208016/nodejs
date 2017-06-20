const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'vmdb1'
});

const sql = {
    executeQueryAsync: function (query) {
        const promise = new Promise((resolve, reject) => {

            pool.getConnection(function (err, connection) {
                connection.query(query, function (error, results, fields) {
                    connection.release();
                    if (error)
                        reject(error);
                    else
                        resolve(results);
                });
            });
   
        });
        return promise;
    },
};

module.exports = sql;