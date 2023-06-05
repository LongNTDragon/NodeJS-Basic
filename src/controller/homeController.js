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

let editUser = async (req, res) => {
    let id = req.body.userID;
    const [user] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return res.render('edit-user.ejs', { data: user });
}

let updateUser = async (req, res) => {
    let { id, fname, lname, address } = req.body;
    await pool.execute('UPDATE users SET firstname = ?, lastname = ?, address = ? WHERE id = ?', [fname, lname, address, id]);
    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    let id = req.body.userID;
    await pool.execute('DELETE FROM users WHERE id = ?', [id]);
    return res.redirect('/');
}
module.exports = {
    getHomePage, getDetailPage, createNewUser, editUser, updateUser, deleteUser
}