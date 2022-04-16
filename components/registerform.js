import React, {useEffect , useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import useAuth from '../lib/firebaseAuth';
import { Container, Wrapper } from "../styles/StyledRegisterForm"

export const RegisterForm = () => {

    const auth = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        console.log(auth.error);
    }, [auth])

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
                        <button onClick={() => auth.register({email, password, firstName, lastName, address, phone})}>Inscription</button>
                    </div>
                    
                    {auth.error && (
                        <span className="error">{auth.error.code === "auth/email-already-in-use" ? "Cette adresse e-mail est déjà utilisée." : "Veuillez compléter tous les champs."}</span>
                    )}

                    <div className="more">
                        <Link href="/login"><a><span>Se connecter</span></a></Link>
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}
