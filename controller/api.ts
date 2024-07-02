import { Request, Response, NextFunction } from "express";
import { updateUser, fetchAllUsers } from "../repository/userCollection";
import { ApiError } from "../entities/ApiError";

export const updateUserData = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const userId = req.params.userId;
		const data = req.body;
		const user = await updateUser(userId, data);
		res.status(200).json(user);
	} catch (error: any) {
		next(new ApiError(error.message, 404));
	}
};

export const fetchUserData = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const users = await fetchAllUsers();
		res.status(200).json(users);
	} catch (error: any) {
		next(new ApiError(error.message, 404));
	}
};
