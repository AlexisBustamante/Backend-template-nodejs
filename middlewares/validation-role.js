const isAdminRole = (req, res, next) => {
    if (req.user.role !== 'ADMIN') {
        res.status(401).json({
            message: 'No tienes permisos para realizar esta acción'
        })
    }
    next();
}


const hasRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            res.status(401).json({
                message: `No tienes permisos para realizar esta acción, necesita uno de los siguientes roles: ${roles}`
            })
        }
        next();
    }
}

export { isAdminRole, hasRole };