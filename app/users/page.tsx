export default async function UsersPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    This is the Users Page. 
                </h1>
                <p>Here we display data fetched from an external API. And we can go to the individual user page by clicking on their name.</p>
                <p>For this we need to make another component (folder) in our users component but this time we name it with square brackets like [userId]. So that we can access the user ID in the URL and display specific user data.</p>
                <h2>Users Data:</h2>
                <ul className="list-disc pl-6">
                    {users.map((user: {id: number; name: string}) => (
                        <li key={user.id}>
                            <a href={`/users/${user.id}`} className="text-blue-500 hover:underline">{user.name}</a>
                        </li>
                    ))}
                </ul> 
            </main>
        </div>
    );
}