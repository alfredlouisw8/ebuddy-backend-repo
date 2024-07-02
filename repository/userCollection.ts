import { db } from "../config/firebaseConfig";
import { User } from "../types";

const userCollection = db.collection("USERS");

export const updateUser = async (userId: string, data: User) => {
	const userDoc = userCollection.doc(userId);
	const doc = await userDoc.get();
	if (!doc.exists) {
		throw new Error("User not found");
	}
	await userDoc.set(data, { merge: true });
	const updatedDoc = await userDoc.get();
	return updatedDoc.data();
};

export const fetchAllUsers = async () => {
	const snapshot = await userCollection.get();
	if (snapshot.empty) {
		throw new Error("No users found");
	}

	const users: User[] = [];
	snapshot.forEach((doc) => {
		users.push({
			id: doc.id,
			name: doc.data().name,
			address: doc.data().address,
		});
	});

	return users;
};
