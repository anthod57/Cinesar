import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { app, db} from "../lib/firebaseConfig";
import useAuth from '../lib/firebaseAuth';

export default function Logout() {

    const auth = useAuth();

    useEffect(() => {
        auth.logout();
    })


    return (
        <>
        </>
    )
}
