import pool from '../configs/connectDB'

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    const [user] = await pool.execute('SELECT * FROM users WHERE id = ?', [req.params.userID]);
    return res.send(JSON.stringify(user));
}

let createNewUser = async (req, res) => {
    let { fname, lname, address } = req.body;
    await pool.execute('INSERT INTO users(firstname, lastname, address) VALUES(?, ?, ?)', [fname, lname, address]);
    res.redirect('/');
}

module.exports = {
    getHomePage, getDetailPage, createNewUser
}