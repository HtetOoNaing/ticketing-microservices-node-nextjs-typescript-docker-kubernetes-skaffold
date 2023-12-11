import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';


export class RequestValidationError extends CustomError {
    statusCode = 400

    constructor(public errors: ValidationError[]) {
        super('Invalid request parameters')

        //Only because we are extending a build in class
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors() {
        return this.errors.map(err => {
            // It might be necessary to use a switch or if statements to check that you're dealing with the type that you want to format/debug.
            if(err.type === 'field') {
                return { message: err.msg, field: err.path }
            }
            return { message: err.msg }
        })
    }
}