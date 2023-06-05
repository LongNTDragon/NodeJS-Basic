import pool from '../configs/connectDB'

let getAllUser = async (req, res) => {
    const [users] = await pool.execute('SELECT * FROM users');
    return res.status(200).json({
        message: 'ok',
        data: users
    })
}

module.exports = {
    getAllUser
}