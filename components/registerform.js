import React, {useEffect , useState} from 'react'
import { app, db } from '../lib/firebaseConfig'
import { useRouter } from 'next/router'
import Link from 'next/link';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';

import { Container, Wrapper } from "../styles/StyledRegisterForm"

export const RegisterForm = () => {

    const router = useRouter();
    const auth = getAuth();
    const errorSpan = React.createRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              
              // ...
            } else {
                
            }
          });
    }, [])

    const register = () => {
        if(email && password && firstName && lastName && address && phone){
            console.log(email, password);

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                console.log(userCredential.user.uid);

                setDoc(doc(db, "users", userCredential.user.uid), {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    address: address,    
                    phone: phone
                });

                router.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                errorSpan.current.style = "display: unset";

                console.log(error);

                if(errorCode === "auth/email-already-in-use"){
                    errorSpan.current.innerText = "Cet email est déjà utilisé."
                }else{
                    errorSpan.current.innerText = "Erreur"
                }
                // ..
            });

        }else{
            errorSpan.current.style = "display: unset";
            errorSpan.current.innerText = "Veuillez remplir tous les champs."
        }
    }
    
    return (
        <>
            <Container>
                <Wrapper>
                    <h1>{"S'inscrire"}</h1>

                    <div className="inputs">
                        <input onChange={(input) => setEmail(input.target.value)} type="email" id="email" name="email" placeholder="Email *" />
                        <input onChange={(input) => setFirstName(input.target.value)} type="text" id="firstname" name="firstname" placeholder="Prénom *" />
                        <input onChange={(input) => setLastName(input.target.value)} type="text" id="lastname" name="lastname" placeholder="Nom *" />
                        <input onChange={(input) => setPassword(input.target.value)} type="password" id="password" name="password" placeholder="Mot de passe *" />
                        <input onChange={(input) => setAddress(input.target.value)} type="text" id="address" name="address" placeholder="Adresse *" />
                        <input onChange={(input) => setPhone(input.target.value)} type="text" id="phone" name="phone" placeholder="Numéro de téléphone *" />
                        <button onClick={() => register()}>Inscription</button>
                    </div>

                    <span className="error" ref={errorSpan}></span>

                    <div className="more">
                        <Link href="/login"><a><span>Se connecter</span></a></Link>
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}
