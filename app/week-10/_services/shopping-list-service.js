// shopping-list-service.js
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, deleteDoc, doc } from "firebase/firestore";

// Get all items for the current user
export async function getItems(userId) {
  const items = [];
  const q = query(collection(db, `users/${userId}/items`));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

// Add a new item to the user's list
export async function addItem(userId, item) {
  const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
  return docRef.id;
}

// Delete an item from the user's list
export async function deleteItem(userId, itemId) {
  await deleteDoc(doc(db, `users/${userId}/items/${itemId}`));
}
