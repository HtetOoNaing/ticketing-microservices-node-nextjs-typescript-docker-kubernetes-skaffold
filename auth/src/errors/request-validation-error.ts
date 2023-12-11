import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
    statusCode = 400

    constructor(public errors: ValidationError[]) {
        super()

        //Only because we are extending a build in class
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors() {
        return this.errors.map(err => {
            // It might be necessary to use a switch or if statements to check that you're dealing with the type that you want to format/debug.
            if(err.type === 'field') {
                return { message: err.msg, field: err.path }
            }
        })
    }
}