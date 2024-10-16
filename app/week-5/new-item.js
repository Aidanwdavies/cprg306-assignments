"use client";
import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        const item = { name, quantity, category }; // Create item object
        console.log(item); // Log to console
        alert(`Item Added: ${name}, Quantity: ${quantity}, Category: ${category}`); // Alert with current state

        // Reset state variables
        setName("");
        setQuantity(1); // Reset to initial quantity
        setCategory("Produce"); // Reset to initial category
    };

    const add = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const remove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label>
                    Item Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border p-2 ml-2"
                    />
                </label>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    type="button"
                    onClick={remove}
                    disabled={quantity === 1}
                    className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
                >
                    Decrement
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                    type="button"
                    onClick={add}
                    disabled={quantity === 20}
                    className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
                >
                    Increment
                </button>
            </div>
            <div>
                <label>
                    Category:
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border p-2 ml-2"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Add Item
            </button>
        </form>
    );
}
