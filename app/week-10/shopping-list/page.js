// page.js
"use client";
import { useState, useEffect } from "react";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";
import { useAuthContext } from "../_utils/auth-context"; // Assume you already have this for user auth

export default function ShoppingList() {
  const { user } = useAuthContext(); // Assume user object has `uid`
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Load items from Firestore
  async function loadItems() {
    if (!user) return;
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  }

  // Add an item to Firestore
  async function handleAddItem() {
    if (newItem.trim() === "") return;
    const item = { name: newItem, quantity: 1, category: "other" }; // Example item structure
    const id = await addItem(user.uid, item);
    setItems((prevItems) => [...prevItems, { id, ...item }]);
    setNewItem("");
  }

  // Delete an item from Firestore
  async function handleDeleteItem(itemId) {
    await deleteItem(user.uid, itemId);
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  // Load items on component mount
  useEffect(() => {
    loadItems();
  }, [user]);

  return (
    <div>
      <h1>Shopping List</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item..."
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
