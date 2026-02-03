export default function ContactPage() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            This is about Client Components.
          </h1>
          <p>  Client Components are rendered on the client and can be interactive. They can use React hooks and handle user events like clicks and form submissions. To make them interactive, they must be marked with "use client" at the top of the file. </p>
          <p>One thing more that you can do is to use them in server components to pass data and event handlers to the client. For example, you can pass a function that updates state in a client component from a server component.</p>
        </main>
        </div>
    );
  }