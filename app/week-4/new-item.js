"use client";
import { useState } from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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
        <div className="flex items-center space-x-4">
            <button
                onClick={remove}
                disabled={quantity === 1}
                className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
            >
                Decrement
            </button>
            <span className="text-lg">{quantity}</span>
            <button
                onClick={add}
                disabled={quantity === 20}
                className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
            >
                Increment
            </button>
        </div>
    );
}
