import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers.authorization?.split("Bearer ")[1];

	if (!token) {
		return res.status(401).send({ message: "Unauthorized" });
	}

	try {
		const decodedToken = await admin.auth().verifyIdToken(token);
		res.locals.user = decodedToken;
		next();
	} catch (error) {
		res.status(401).send({ message: "Unauthorized" });
	}
};
