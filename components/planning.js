import React, { useEffect } from 'react'
import { Container, Wrapper, Calendar } from "../styles/StyledPlanning";
import Image from './image';
import moment from 'moment/min/moment-with-locales';
import Link from 'next/link';

export const Planning = (props) => {

    const currentWeek = () => {
        let days = [];
        for (let index = 1; index < 8; index++) {
            days.push(moment(Date.now()).startOf('week').isoWeekday(index));
        }

        return days;
    }

    const nextWeek = () => {
        let days = [];
        for (let index = 8; index < 15; index++) {
            days.push(moment(Date.now()).startOf('week').isoWeekday(index));
        }

        return days;
    }

    useEffect(() => {

    }, [])

    const formatDate = (date) => {
        let formated = moment(date);

        return formated.locale("fr").format("dd.DD");
    }

    return (
        <>
            <Container>
                <h1>{props.title}</h1>
                <Wrapper>
                    {props.movies.results.map((movie, index) => {
                        return (
                            <>
                                <div key={index} className="movie">
                                    <h2>{movie.title}</h2>

                                    <div className="content">
                                        <div className="poster">
                                            <Image alt={movie.title} placeholder="blur" blurDataURL={"/images/placeholders/movie-card.jpg"} quality={80} layout='fill' objectFit='contain' src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} loading="lazy" />
                                        </div>
                                        <div className="infos">
                                            <span>Sortie: <b>{movie.release_date}</b></span>
                                            <span>Note: <b>{movie.vote_average}/10 ({movie.vote_count} votes)</b></span>
                                            <p className="overview">{movie.overview}</p>

                                            <div className="buttons">
                                                <Link href={`/film/${movie.id}`}><a><button>Détails</button></a></Link>
                                                <Link href={`/film/${movie.id}`}><a><button>Réserver</button></a></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <Calendar>
                                        <table>
                                            <tr>
                                                {
                                                    currentWeek().map((day, index) => {
                                                        if (moment(day).isSame(new Date(), "day")) {
                                                            return (<th key={index}>{"Aujourd'hui"}</th>)
                                                        } else {
                                                            return (<th key={index}>{formatDate(day)}</th>)
                                                        }
                                                    })
                                                }
                                            </tr>
                                            <tr>
                                                <td>13h00</td>
                                                <td>13h00</td>
                                                <td>13h45</td>
                                                <td>13h00</td>
                                                <td>14h15</td>
                                                <td>19h00</td>
                                                <td>16h30</td>
                                            </tr>
                                            <tr>
                                                <td>16h00</td>
                                                <td>16h00</td>
                                                <td>17h30</td>
                                                <td>15h30</td>
                                                <td>17h00</td>
                                                <td>21h30</td>
                                                <td>19h45</td>
                                            </tr>
                                            <tr>
                                                <td>20h30</td>
                                                <td>20h30</td>
                                                <td></td>
                                                <td>19h45</td>
                                                <td>20h30</td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                        </table>
                                    </Calendar>
                                    <Calendar>
                                        <table>
                                            <tr>
                                                {
                                                    nextWeek().map((day, index) => {
                                                        return (<th key={index}>{formatDate(day)}</th>)
                                                    })
                                                }
                                            </tr>
                                            <tr>
                                                <td>13h00</td>
                                                <td>13h00</td>
                                                <td>13h45</td>
                                                <td>13h00</td>
                                                <td>14h15</td>
                                                <td>19h00</td>
                                                <td>16h30</td>
                                            </tr>
                                            <tr>
                                                <td>16h00</td>
                                                <td>16h00</td>
                                                <td>17h30</td>
                                                <td>15h30</td>
                                                <td>17h00</td>
                                                <td>21h30</td>
                                                <td>19h45</td>
                                            </tr>
                                            <tr>
                                                <td>20h30</td>
                                                <td>20h30</td>
                                                <td></td>
                                                <td>19h45</td>
                                                <td>20h30</td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                        </table>
                                    </Calendar>
                                </div>
                            </>
                        );
                    })}
                </Wrapper>
            </Container>
        </>
    )
}
