import * as admin from "firebase-admin";
import * as dotenv from "dotenv";
import * as fs from "fs";

dotenv.config();

console.log(process.env.PROJECT_ID, process.env.SERVICE_ACCOUNT_KEY);

const projectId = process.env.PROJECT_ID || "ebuddy-adb79";
const serviceAccountKey =
	process.env.SERVICE_ACCOUNT_KEY || "config/serviceAccountKey.json";

if (!projectId || !serviceAccountKey) {
	throw new Error(
		"Please define the PROJECT_ID and SERVICE_ACCOUNT_KEY environment variables inside .env file"
	);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountKey, "utf-8"));

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: `https://${projectId}.firebaseio.com`,
});

export const db = admin.firestore();
