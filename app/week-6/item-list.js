"use client";
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    // Sorting and grouping logic remains the same
    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'category') return a.category.localeCompare(b.category);
        return 0;
    });
    const groupedItems = sortedItems.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {});

    return (
        <div className="w-full max-w-3xl">
            <div className="flex justify-between mb-4">
                <button
                    onClick={() => setSortBy('name')}
                    className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setSortBy('group')}
                    className={`px-4 py-2 rounded ${sortBy === 'group' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Group by Category
                </button>
            </div>

            {sortBy === 'group' ? (
                <div>
                    {Object.keys(groupedItems).sort().map((category) => (
                        <div key={category} className="mb-4">
                            <h3 className="text-2xl font-semibold capitalize text-gray-700 mb-2">{category}</h3>
                            <ul className="space-y-1">
                                {groupedItems[category].map((item) => (
                                    <Item key={item.id} {...item} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <ul className="space-y-2">
                    {sortedItems.map((item) => (
                        <Item key={item.id} {...item} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ItemList;
