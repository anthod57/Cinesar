import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from "../components/navbar"
import { Movies } from "../components/movies"
import { News } from '../components/news'
import axios from 'axios'
import { server } from "../config"
import { Trailer } from '../components/trailer'

export default function Home(data) {

  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    axios.get(`${server}/now_playing?api_key=93d598dddc45bd2e2cbf1b356ff6e38e&language=fr-FR&page=1`).then(response => setNowPlaying(response.data));
    axios.get(`${server}/upcoming?api_key=93d598dddc45bd2e2cbf1b356ff6e38e&language=fr-FR&page=1`).then(response => setUpcoming(response.data));

    
    

    console.log(nowPlaying);

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
      <Navbar active={0}></Navbar>
      <Trailer id={"trailer-container"}></Trailer>
      <main>
        <section id="movies" style={{ backgroundColor: "#17192e" }}>
          <Movies title={"Films à l'affiche"} data={nowPlaying}></Movies>
        </section>
        <section id="news">
          <News></News>
        </section>
        <section style={{ backgroundColor: "#17192e" }}>
          <Movies title={"Prochainement"} data={upcoming}></Movies>
        </section>
      </main>

      <link href={"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;700&display=swap"} rel="stylesheet" />
      <link rel="stylesheet" id="font-awesome" media="print" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

    </>
  )
}

// Home.getInitialProps = async (ctx) => {
//   console.log(ctx);
//   try {
//     const header = { 'Content-Type': 'application/json;charset=utf-8' };
//     const resNowPlaying = await axios.get(`${server}/now_playing?api_key=${process.env.API_KEY}&language=fr-FR&page=1`, header)
//     const resUpcoming = await axios.get(`${server}/upcoming?api_key=${process.env.API_KEY}&language=fr-FR&page=1`, header)

//     const nowPlaying = resNowPlaying.data;
//     const upcoming = resUpcoming.data;

//     return {
//       movies: {
//         nowPlaying,
//         upcoming
//       },
//     }
//   } catch (error) {
//     return {
//       items: null
//     } 
//   }
// }
