"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        // Clean up the item name by removing size, special characters, and emojis
        const cleanedItemName = item
            .split(',')[0]                  // Remove quantity (anything after a comma)
            .replace(/[\p{Emoji_Presentation}]/gu, '') // Remove emojis using Unicode property
            .replace(/[^a-zA-Z\s]/g, '')    // Remove special characters
            .trim();                        // Trim any extra whitespace
        
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <div className="flex flex-col lg:flex-row w-full max-w-4xl mt-6 gap-6">
                <div className="flex-1">
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </div>
            </div>
        </main>
    );
}

export default Page;
