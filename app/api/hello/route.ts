import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello, Next.js!" });
}

export async function POST(request: Request) {
    const data = await request.json();
    const {name} = data;
    return NextResponse.json({ message: `Hello from the API, ${name}!` });
}