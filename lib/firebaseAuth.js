import { getAuth, initializeAuth, signOut, onAuthStateChanged ,createUserWithEmailAndPassword, signInWithEmailAndPassword, browserSessionPersistence, browserLocalPersistence, indexedDBLocalPersistence } from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { app, db } from "./firebaseConfig";
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useRouter } from "next/router";

const authContext = createContext();

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider(props) {
    const [user, setUser] = useState(null); //Object containing user object (from Firebase) and userData (from Firestore DB)
    const [error, setError] = useState(null);

    const auth = initializeAuth(app, {persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]});
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);
                setUser({user: user, userData: userDoc.data()});
                setError(null);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [])

    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser({user: userCredential.user, userData: null});
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
            setUser({user: userCredential.user, userData: null});
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
