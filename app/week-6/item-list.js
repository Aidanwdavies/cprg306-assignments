"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    // Sorting logic based on sortBy value
    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'category') return a.category.localeCompare(b.category);
        return 0;
    });

    // Group items by category if sortBy is set to 'group'
    const groupedItems = sortedItems.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {});

    return (
        <div>
            {/* Buttons for sorting and grouping */}
            <div>
                <button
                    onClick={() => setSortBy('name')}
                    style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setSortBy('group')}
                    style={{ backgroundColor: sortBy === 'group' ? 'lightblue' : 'white' }}
                >
                    Group by Category
                </button>
            </div>

            {/* Render grouped items if sorting by 'group', otherwise render sorted list */}
            {sortBy === 'group' ? (
                <div>
                    {Object.keys(groupedItems).sort().map((category) => (
                        <div key={category}>
                            <h3>{category}</h3>
                            <ul>
                                {groupedItems[category].map((item) => (
                                    <Item key={item.id} {...item} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <ul>
                    {sortedItems.map((item) => (
                        <Item key={item.id} {...item} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ItemList;
