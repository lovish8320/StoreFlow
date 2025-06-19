const pool = require("./pool");

const query = (query, data, callback) => {
    pool.getConnection((err, con) => {
        if (err) {
            console.error("❌ MySQL connection failed:", err.message);

            // ⚠ Only release if con exists
            if (con) con.release();

            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, null);
            return;
        }

        con.query(query, data, (error, result, fields) => {
            con.release();

            if (error) {
                console.log("❌ Query error:", error);
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, null);
            } else {
                callback(null, result);
            }
        });
    });
};

module.exports = query;
