const customError = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500
    error.message = error.message || 'Error'
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })
}


export { customError };