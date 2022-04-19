import React, { useEffect } from 'react'
import Head from 'next/head'

import { Navbar } from "../components/navbar"
import { Footer } from '../components/footer'

import { MENU_ITEMS } from '../data/menu'
import { EVENTS_ITEMS } from '../data/events'

import useAuth from '../lib/firebaseAuth'
import { useRouter } from 'next/router'

// No API or DB call here, only using local data as sample

const Account = (data) => {

  const { user } = useAuth();
  const router = useRouter();

  if (user) {
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
          {user && user.userData ? (<h1>Bonjour, {user.userData.firstName} !</h1>) : ""}
        </main>

        <Footer menu={MENU_ITEMS}></Footer>
      </>
    )
  }else{
    router.replace("/login");
    return <></>
  }
}


export default Account;

// Just grabbing sample from local data as example, no api or db call
export async function getServerSideProps(ctx) {
  const article = EVENTS_ITEMS.find(x => { return x.slug == ctx.query.slug }) || null;

  return {
    props: {
      article
    },
  };
};