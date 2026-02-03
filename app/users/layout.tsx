export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header className="bg-blue-200 p-2 text-center font-semibold text-black"> An Independent User's Route Layout </header>
        <main>{children}</main>
      </div>
    );
  }