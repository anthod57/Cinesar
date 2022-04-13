import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from "../components/navbar"
import { Movies } from "../components/movies"
import { News } from '../components/news'
import axios from 'axios'
import { server } from "../config"

export default function Home(data) {

  useEffect(() => {
    document.getElementById("font-awesome").setAttribute("media", "all");
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <Navbar></Navbar>
      <main>
        <section id="movies" style={{backgroundColor: "#17192e"}}>
          <Movies title={"Films à l'affiche"} data={data.movies.nowPlaying}></Movies>
        </section>
        <section id="news">
          <News></News>
        </section>
        <section style={{backgroundColor: "#17192e"}}>
        <Movies title={"Prochainement"} data={data.movies.upcoming}></Movies>
        </section>
      </main>

      <link href={"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;700&display=swap"} rel="stylesheet" />
      <link rel="stylesheet" id="font-awesome" media="print" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const resNowPlaying = await axios(`${server}/now_playing?api_key=${process.env.API_KEY}&language=fr-FR&page=1`)
  const resUpcoming = await axios(`${server}/upcoming?api_key=${process.env.API_KEY}&language=fr-FR&page=1`)

  const nowPlaying = resNowPlaying.data;
  const upcoming = resUpcoming.data;

  return {
    movies: {
      nowPlaying,
      upcoming
    },
  }
}
