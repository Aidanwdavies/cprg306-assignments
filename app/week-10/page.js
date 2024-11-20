"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useAuthContext } from "../_utils/auth-context";
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";

function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const { user } = useUserAuth();
    const router = useRouter();

    // Redirects to login if not authenticated
    useEffect(() => {
        if (!user) {
            router.push("/week-9");
        } else {
            loadItems();
        }
    }, [user, router]);

    // Loads items from Firestore
    const loadItems = async () => {
        try {
            const userItems = await getItems(user.uid);
            setItems(userItems);
        } catch (error) {
            console.error("Error loading items:", error);
            alert("Failed to load items. Please try again later.");
        }
    };

    // Handles adding a new item with basic validation
    const handleAddItem = async (newItem) => {
        if (!newItem.name || newItem.name.trim().length === 0) {
            alert("Item name cannot be empty.");
            return;
        }

        if (user) {
            try {
                const itemId = await addItem(user.uid, newItem);
                setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
            } catch (error) {
                console.error("Error adding item:", error);
                alert("Failed to add item. Please try again.");
            }
        }
    };

    // Handles deleting an item
    const handleDeleteItem = async (itemId) => {
        if (user) {
            try {
                await deleteItem(user.uid, itemId);
                setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
            } catch (error) {
                console.error("Error deleting item:", error);
                alert("Failed to delete item. Please try again.");
            }
        }
    };

    // Cleans and sets the selected item name for meal ideas
    const handleItemSelect = (item) => {
        const cleanedItemName = item
            .split(',')[0]
            .replace(/[\p{Emoji_Presentation}]/gu, '')
            .replace(/[^a-zA-Z\s]/g, '')
            .trim();

        setSelectedItemName(cleanedItemName);
    };

    if (!user) {
        return null;
    }

    return (
        <main className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <div className="flex flex-col lg:flex-row w-full max-w-4xl mt-6 gap-6">
                <div className="flex-1">
                    <ItemList items={items} onItemSelect={handleItemSelect} onDeleteItem={handleDeleteItem} />
                </div>
                <div className="flex-1">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </div>
            </div>
        </main>
    );
}

export default Page;
