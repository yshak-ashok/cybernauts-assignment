const path = require('path');
const pool = require('../db');
const filePath = path.join(__dirname, '..', 'view');

const register = async (req, res) => {
    try {
        res.sendFile(`${filePath}/register.html`);
    } catch (err) {
        console.log(err);
    }
};

const registerProduct = async (req, res) => {
  try {
    const { category, model, serialNumber, invoiceDate } = req.body;
        const file = req.file.originalname; 
        console.log('Received file:', file);
        const query = `
            INSERT INTO product (category, model, serial_number, invoice_date, file)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
          `;
            const values = [category, model, serialNumber, invoiceDate, file];
            const result = await pool.query(query, values);
            res.json(result.rows[0]);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = { register, registerProduct };
