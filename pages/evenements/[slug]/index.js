import React, { useEffect } from 'react'
import Head from 'next/head'

import { Navbar } from "../../../components/navbar"
import { Footer } from '../../../components/footer'
import { Event } from '../../../components/event'

import { MENU_ITEMS } from '../../../data/menu'
import { EVENTS_ITEMS } from '../../../data/events'

const Evenement = (data) => {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1" />
            </Head>

            <Navbar menu={MENU_ITEMS} active={2}></Navbar>

            <main>
                <Event title={"Évenements"}article={data.article}></Event>
            </main>

            <Footer menu={MENU_ITEMS}></Footer>
        </>
    )
}


export default Evenement; 

// Just grabbing sample from local data as example, no api or db call
export async function getServerSideProps(ctx) {
  const article = EVENTS_ITEMS.find(x => {return x.slug == ctx.query.slug}) || null;

  return {
    props: {
      article
    },
  };
};
