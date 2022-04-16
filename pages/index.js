import { useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import useAuth from "../lib/firebaseAuth";

import { Navbar } from "../components/navbar";
import { Movies } from "../components/movies";
import { Events } from "../components/events";
import { Newsletter } from "../components/newsletter";
import { Footer } from "../components/footer";

import { HOST } from "../config";
import { MENU_ITEMS } from "../data/menu";
import { EVENTS_ITEMS } from "../data/events";

export default function Home(data) {

  const { user } = useAuth();

  useEffect(() => {

    // Make font-awesome css only load once page is fully loaded to avoid render-blocking
    document.getElementById("font-awesome").setAttribute("media", "all");
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1" />
      </Head>

      <Navbar currentUser={user ? user : null} menu={MENU_ITEMS} active={0}></Navbar>

      <main>
        <section id="nowplaying" style={{ backgroundColor: "#17192e" }}>
          <Movies title={"Films à l'affiche"} data={data.nowPlaying}></Movies>
        </section>

        <section id="events">
          <Events title="Évenements" data={EVENTS_ITEMS}></Events>
        </section>

        <section id="upcoming" style={{ backgroundColor: "#17192e" }}>
          <Movies title={"Prochainement"} data={data.upcoming}></Movies>
        </section>

        <section id="newsletter">
          <Newsletter></Newsletter>
        </section>
      </main>

      <Footer menu={MENU_ITEMS}></Footer>
    </>
  );
}


// Get upcomings and now playing movies
export async function getServerSideProps(ctx) {
  const nowPlayingReq = axios.get(`${HOST}/api/movies?from=now_playing`);
  const upcomingReq = axios.get(`${HOST}/api/movies?from=upcoming`);

  const [nowPlaying, upcoming] = await Promise.all([nowPlayingReq, upcomingReq]);

  return {
    props: {
      nowPlaying: nowPlaying.data,
      upcoming: upcoming.data,
    },
  };
};
