"use client";

// Import React, Link, and useUserAuth hook
import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        {!user ? (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Shopping List App</h1>
            <p className="text-gray-600 mb-6">Please log in to access your personalized shopping list.</p>
            <button
              onClick={handleSignIn}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Login with GitHub
            </button>
          </div>
        ) : (
          <div>
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome, {user.displayName}
            </p>
            <p className="text-gray-600 mb-6">Email: {user.email}</p>
            <button
              onClick={handleSignOut}
              className="text-blue-500 font-semibold py-2 px-4 rounded mb-4 hover:bg-gray-100"
            >
              Logout
            </button>
            <Link href="/week-9/shopping-list">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Go to Shopping List
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
