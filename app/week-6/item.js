"use client";

import React from 'react';

function Item({ name, quantity, category }) {
    return (
        <li>
            <strong>{name}</strong> - Quantity: {quantity} - Category: {category}
        </li>
    );
}

export default Item;
