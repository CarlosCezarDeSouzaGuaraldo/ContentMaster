import { signOut } from "@/auth";

const SignOut = () => {
    return (
        <>
            <form action={async () => {
                'use server'
                await signOut()
            }}>
                <button type="submit">
                    Sign Out
                </button>
            </form>
        </>
    );
}

export default SignOut;
