"use client";
import React from 'react';

function Item({ name, quantity, category, onSelect }) {
    return (
        <li 
            className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center cursor-pointer" 
            onClick={() => onSelect(name)}
        >
            <div>
                <span className="font-medium text-gray-800">{name}</span> - 
                <span className="text-gray-600 ml-2">Quantity: {quantity}</span> 
                <span className="text-gray-400 text-sm ml-2 capitalize">({category})</span>
            </div>
        </li>
    );
}

export default Item;
