const pool = require("../config/db");

const createContact = async ({ name, email, message}) => {
    const result = await pool.query(
        `INSERT INTO contacts(name, email, message) VALUES ($1, $2, $3) returning *`,
        [name, email, message]
    );
    return result.rows[0];
};

const getAllContacts = async () => {
    const result = await pool.query(`SELECT * FROM contacts ORDER BY created_at DESC`);
    return result.rows;
};

module.exports = { createContact, getAllContacts };