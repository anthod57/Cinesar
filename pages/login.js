import { useEffect } from "react";
import Head from "next/head";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { LoginForm } from "../components/loginform";

import { MENU_ITEMS } from "../data/menu";
import useAuth from "../lib/firebaseAuth";
import { useRouter } from "next/router";



export default function Login() {

    const auth = useAuth();
    const router = useRouter();

    if (!auth.user) {
        return (
            <>
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1" />
                </Head>

                <Navbar menu={MENU_ITEMS} active={3}></Navbar>

                <main>
                    <section id="login">
                        <LoginForm auth={auth}></LoginForm>
                    </section>
                </main>

                <Footer menu={MENU_ITEMS}></Footer>
            </>
        )
    } else {
        router.replace("/")
        return <></>
    }
}
