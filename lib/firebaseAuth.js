import { getAuth, initializeAuth, signOut, onAuthStateChanged ,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { app, db } from "./firebaseConfig";
import { setDoc, doc } from 'firebase/firestore';
import { useRouter } from "next/router";

const authContext = createContext();

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const auth = initializeAuth(app);
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError(null);
            } else {
                setUser(null);
            }
        });
    }, [user])

    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user);
            setError(null);
            router.push("/");
        }).catch((error) => {
            setError(error);
        });
    }

    const logout = async () => {
        await signOut(auth);
        setUser(null);
        router.push("/");
    }

    const register = async (data) => {
        await createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
            setUser(user);
            setError(null);
            setDoc(doc(db, "users", userCredential.user.uid), {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phone: data.phone
            });
            router.push("/");
        }).catch((error) => {
            setError(error);
        })
    }

    const value = { user, error, login, logout, register };

    return <authContext.Provider value={value} {...props} />
}
