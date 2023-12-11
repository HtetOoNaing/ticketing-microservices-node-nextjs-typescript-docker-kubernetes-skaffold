import { NextFunction, Request, Response } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof RequestValidationError) {
        console.log(' request validation error ')
        return res.status(err.statusCode).json({ errors: err.serializeErrors() })
    }
    if (err instanceof DatabaseConnectionError) {
        console.log(' db connection error ')
        return res.status(err.statusCode).json({ errors: err.serializeErrors() })
    }

    res.status(400).send({
        errors: [{ message: err.message || 'Something went wrong' }]
    })
}