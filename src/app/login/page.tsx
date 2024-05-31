import { signIn } from "@/auth";

export default function Login() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form
                action={async () => {
                    "use server";
                    await signIn("google", { redirectTo: "/dashboard/home" });
                }}
                className="py-2 px-4 rounded-md shadow-md"
            >
                <button type="submit">Signin with Google</button>
            </form>
        </main>
    );
}
