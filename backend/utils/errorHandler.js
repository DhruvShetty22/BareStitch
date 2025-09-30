class errorHandler extends Error {
    constructor(message = "Ther was an ERROR!", statusCode, errors = []) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
        this.errors = errors;
    }
}

export default errorHandler;
