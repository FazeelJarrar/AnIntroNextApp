"use client";

import { useState } from "react";

// Fethch Function method for API route call while in a server component

// async function fetchFriends() {
//     const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: "SAUD BUTT SAHB" }),
//     });
//     const data = await res.json();
//     return { data };
// }

// Fethch Function method for API route call while in a client component

async function fetchFriends() {
    const res = await fetch(`/api/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "SAUD BUTT SAHB" }),
    });
    const data = await res.json();
    return { data };
}

export default function FriendsPage() {
    const [message, setMessage] = useState("");
    const onClick = async () => {
        const { data } = await fetchFriends();
        setMessage(data.message);
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start"> Hi there! This is the Friends Page. 
            <h1 className="text-2xl font-bold mt-4 mb-4">Friends Message: </h1>
            <p className="text-lg">{message}</p>
            <button onClick={onClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Fetch Friends Message
            </button>
        </main>
      </div>
    );
  }