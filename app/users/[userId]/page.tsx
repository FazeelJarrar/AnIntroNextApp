import { notFound } from "next/navigation";

async function fetchUser(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) {
        notFound();
    }
    const user = await res.json();
    return user;
}

export default async function UserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const user = await fetchUser(userId);
    
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    This is the information about <p className="text-blue-500 italic font-serif" >{user.name}</p>
                </h1>
                <ul className="list-disc pl-6 mt-5">
                    <li><strong>Email:</strong> {user.email}</li>
                    <li><strong>Phone:</strong> {user.phone}</li>
                    <li><strong>Website:</strong> <a href={`https://${user.website}`} className="text-blue-500 hover:underline" target="_blank">{user.website}</a></li>
                    <li><strong>Company:</strong> {user.company.name}</li>
                    <li><strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</li>
                </ul> 
            </main>
        </div>
    );
}