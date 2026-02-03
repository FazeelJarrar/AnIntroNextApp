"use client"

export default function ButtonComponent() {
    return (
        <button
            onClick={() => alert('Button clicked!')}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
            Click Me
        </button>
    );
}