import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { app } from "./core/app";
import * as dotenv from "dotenv";

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// });

exports.app = functions.https.onRequest(app);
