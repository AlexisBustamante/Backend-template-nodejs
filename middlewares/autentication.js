const verificarAuth = (req, res, next) => {

    // Leer headers
    let token = req.get('token');

    console.log(token);

    next();

}

module.exports = { verificarAuth };