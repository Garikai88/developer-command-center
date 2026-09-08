const pool = require("../config/db");

const getAllSkills = async () => {
    const result = await pool.query(`SELECT * FROM skills ORDER BY display_order ASC`);
    return result.rows;
};

const createSkill = async ({ name, level, display_order}) => {
    const result = await pool.query(
        `INSERT INTO skills (name, level, display_order)
        VALUES ($1, $2, $3) RETURNING *`,
        [name, level, display_order]
    );
    return result.rows[0];
};

module.exports = { getAllSkills, createSkill };