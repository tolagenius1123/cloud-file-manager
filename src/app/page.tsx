"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Loading...</h1>
        </main>
    );
}
