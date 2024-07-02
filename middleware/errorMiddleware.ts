import { Request, Response, NextFunction } from "express";
import { ApiError } from "../entities/ApiError";

export const errorMiddleware = (
	err: ApiError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statusCode = err.statusCode || 500;
	res.status(statusCode).send({
		message: err.message,
		status: statusCode,
	});
};
