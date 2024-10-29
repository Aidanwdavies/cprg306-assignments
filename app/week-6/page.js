"use client";
import React from 'react';
import ItemList from './item-list';

function Page() {
    return (
        <main className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Shopping List</h1>
            <ItemList />
        </main>
    );
}

export default Page;
