import { useEffect } from "react";
import Head from "next/head";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

import { MENU_ITEMS } from "../data/menu";
import useAuth from "../lib/firebaseAuth";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getItems } from "../redux/features/cartSlice";



export default function Login() {

    const auth = useAuth();
    const router = useRouter();
    const items = useSelector(getItems);

    useEffect(() => {
        document.getElementById("font-awesome").setAttribute("media", "all");
        console.log(items);
    }, [items])

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1" />
            </Head>

            <Navbar menu={MENU_ITEMS} active={4}></Navbar>

            <main>
                
            </main>

            <Footer menu={MENU_ITEMS}></Footer>
        </>
    );
}