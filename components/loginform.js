import React, {useEffect , useState} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import useAuth from '../lib/firebaseAuth';

import { Container, Wrapper } from "../styles/StyledLoginForm"

export const LoginForm = (props) => {

    const auth = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        
    }, [auth])
    
    return (
        <>
            <Container>
                <Wrapper>
                    <h1>Se connecter</h1>

                    <div className="inputs">
                        <input onKeyDown={(key) => { key.key == "Enter" ? auth.login(email, password) : null}} onChange={(input) => setEmail(input.target.value)} type="email" id="email" name="email" placeholder="Email *" />
                        <input onKeyDown={(key) => { key.key == "Enter" ? auth.login(email, password) : null}} onChange={(input) => setPassword(input.target.value)} type="password" id="password" name="password" placeholder="Mot de passe *" />
                        <button onClick={() => auth.login(email, password)}>Connexion</button>
                    </div>

                    {auth.error && (
                        <span className="error">{"Email ou mot de passe incorrect."}</span>
                    )}

                    <div className="more">
                        <Link href="/register"><a><span>{"S'inscrire"}</span></a></Link>
                        <Link href="/"><a><span>Mot de passe oublié</span></a></Link>
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}
