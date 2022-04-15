import Link from 'next/link';
import React from 'react'
import { Container, Wrapper, Form } from "../styles/StyledNewsletter";

export const Newsletter = () => {
    return (
        <>
            <Container>
                <h2>News, offres et bons plans</h2>
                <Wrapper>
                    <Form method="post" action="">
                        <p>Abonnez-vous pour recevoir toutes les news, offres et bon plans de votre cinéma Cinésar !</p>
                        <div className="newsletter-input">
                            <input type="email" id="email-input" name="email-input" placeholder="Mon e-mail *" /><button type="submit">Confirmer</button>
                        </div>
                        <span>* Champ obligatoire</span>
                        <Link href="/"><a><span className="legal-mentions">Mentions légales</span></a></Link>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}
