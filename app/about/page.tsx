import ButtonComponent from "./ButtonComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Name of Website",
  description: "A lot of kewords",
  keywords: "about, company, mission, ai, saas",
  twitter: {
    card: "summary_large_image",
    title: "About Us | Twitter",
  },
};

export default async function AboutPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            This is about Server Components.
            </h1>
            <p>  Server Components are rendered on the server and sent as HTML to the client. They can fetch data directly from the server, access databases, and perform server-side logic. </p>
            <p>Server Components are not sent to the client and are not interactive. They are rendered on the server and sent as static HTML to the client. You can call or fetch data from a server component and pass it to a client component. Also you can fethc data from a source and can console in the server file. And if you want to call or place a button that perform some action while clicking it. You can make a component like a client component and pass it to the server component.</p>
            <p>For Fetch API result see console and Button example below.</p>
            
            <ButtonComponent />

        </main>
        </div>
    );
  }