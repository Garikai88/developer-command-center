const pool = require("../config/db");

const getAllCertificates = async () => {
    const result = await pool.query(`SELECT * FROM certificates ORDER BY year DESC, created_at DESC`);
    return result.rows;
};

const createCertificate = async ({ title, issuer, description, year, credential_url }) => {
    const result = await pool.query(
        `INSERT INTO certificates (title, issuer, description, year, credential_url)
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [title, issuer, description, year, credential_url]
    );
    return result.rows[0];
};

module.exports = { getAllCertificates, createCertificate };