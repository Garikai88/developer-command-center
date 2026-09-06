// 404 handler - runs when no route matched the request
const notFound = (req, res, next) => {
    res.status(404).render("error", {
        title: "Signal Lost",
        statusCode: 404,
        message: "The requested channel does not exist in this system."
    });
};

// General error handler - catches thrown/passed errors from routes and controllers
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).render("error", {
        title: "System Malfunction",
        statusCode,
        message: statusCode === 500
            ? "An unexpected error occurred. The command center is experiencing technical difficulties."
            : err.message
    });
};

module.exports = { notFound, errorHandler };