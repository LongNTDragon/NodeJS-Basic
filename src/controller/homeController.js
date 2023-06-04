import connection from '../configs/connectDB'

let getHomePage = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            return res.render('index.ejs', { dataUser: results });
        }
    );
}

module.exports = {
    getHomePage
}