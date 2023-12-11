import { NextFunction, Request, Response } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof RequestValidationError) {
        console.log(' request validation error ')
        const formattedError = err.errors.map(error => {
            // It might be necessary to use a switch or if statements to check that you're dealing with the type that you want to format/debug.
            if (error.type === 'field') {
                return { message: error.msg, field: error.path }
            }
        })
        return res.status(400).json({errors: formattedError})
    }
    if (err instanceof DatabaseConnectionError) {
        console.log(' db connection error ')
        return res.status(400).json({errors: [
            { message: err.reason, }
        ]})
    }

    res.status(400).send({
        errors: [{ message: err.message || 'Something went wrong' }]
    })
}