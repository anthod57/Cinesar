import React from 'react'
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'
import { Movie } from '../../../components/movie'
import axios from "axios";

const HOST =  process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : "http://localhost:3000";

const Film = (data) => {

    const MENU_LINKS = [
        {
          text: "Accueil",
          link: "/"
        },
        {
          text: "Horaires",
          link: "/horaires"
        },
        {
          text: "Films à l'affiche",
          link: "/films-a-l-affiche"
        },
        {
          text: "Prochainement",
          link: "/prochainement"
        },
        {
          text: "Informations",
          link: "/informations"
        },
        {
          text: "Mon compte",
          link: "/login"
        },
      ]

      useEffect(() => {
        // Make font-awesome css only load once page is fully loaded to avoid render-blocking
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
            <Navbar menu={MENU_LINKS} active={-1}></Navbar>

            <main>
                <Movie data={data.data.movie} trailer={data.data.trailerUrl}></Movie>
            </main>

            <Footer menu={MENU_LINKS}></Footer>

            <link href={"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;700&display=swap"} rel="stylesheet" />
            <link rel="stylesheet" id="font-awesome" media="print" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        </>
    )
}


export default Film;

Film.getInitialProps = async (ctx) => {
    const resMovie = await axios.get(`${HOST}/api/movie?id=${ctx.query.id}`)
    const resTrailer = await axios.get(`${HOST}/api/trailer?id=${ctx.query.id}`)
    const movie = resMovie.data;
    const trailerUrl = "https://www.youtube.com/embed/" + resTrailer.data;

    return {
      data: {
        movie,
        trailerUrl
      },
    }
}
