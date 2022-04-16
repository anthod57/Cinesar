import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { app, db} from "../lib/firebaseConfig";




export default function Logout() {

    const auth = getAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.currentUser) {
            auth.currentUser.auth.signOut();
        }
        router.push("/");
    })


    return (
        <>
        </>
    )
}
