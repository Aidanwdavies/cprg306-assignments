"use client";

import React, { useState } from 'react';

function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('dairy');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            quantity: parseInt(quantity),
            category
        };
        onAddItem(newItem);
        setName('');
        setQuantity(1);
        setCategory('dairy');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white shadow rounded-lg">
            <div>
                <label className="block text-gray-700">Item Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Quantity</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                    required
                >
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="produce">Produce</option>
                    <option value="meat">Meat</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="household">Household</option>
                </select>
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
                Add Item
            </button>
        </form>
    );
}

export default NewItem;
