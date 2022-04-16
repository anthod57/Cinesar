import React, {useEffect , useState} from 'react'
import Link from 'next/link';
import { app } from '../lib/firebaseConfig'
import { useRouter } from 'next/router'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { Container, Wrapper } from "../styles/StyledLoginForm"

export const LoginForm = (props) => {

    const router = useRouter();
    const auth = props.auth;
    const errorSpan = React.createRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    const login = () => {
        if(email && password){
            console.log(email, password);

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                router.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                errorSpan.current.style = "display: unset";

                if(errorCode === "auth/user-not-found" || errorCode === "auth/wrong-password"){
                    
                    errorSpan.current.innerText = "Email ou mot de passe incorrect."
                }else{
                    errorSpan.current.innerText = "Erreur."
                }
            });

        }else{
            errorSpan.current.style = "display: unset";
            errorSpan.current.innerText = "Entrez un email et un mot de passe valide."
        }
    }
    
    return (
        <>
            <Container>
                <Wrapper>
                    <h1>Se connecter</h1>

                    <div className="inputs">
                        <input onKeyDown={(key) => { key.key == "Enter" ? login() : null}} onChange={(input) => setEmail(input.target.value)} type="email" id="email" name="email" placeholder="Email *" />
                        <input onKeyDown={(key) => { key.key == "Enter" ? login() : null}} onChange={(input) => setPassword(input.target.value)} type="password" id="password" name="password" placeholder="Mot de passe *" />
                        <button onClick={() => login()}>Connexion</button>
                    </div>

                    <span className="error" ref={errorSpan}></span>

                    <div className="more">
                        <Link href="/register"><a><span>{"S'inscrire"}</span></a></Link>
                        <Link href="/"><a><span>Mot de passe oublié</span></a></Link>
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}
