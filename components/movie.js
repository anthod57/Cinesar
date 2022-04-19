import React, { useState } from 'react'
import Image from './image'
import moment from 'moment/min/moment-with-locales';

import { Container, Wrapper, Calendar } from '../styles/StyledMovie'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/cartSlice';

export const Movie = (props) => {

    const [showPlayer, setShowPlayer] = useState(false);
    const dispatch = useDispatch();

    const currentWeek = () => {
        let days = [];
        for (let index = 1; index < 8; index++) {
            days.push(moment(Date.now()).startOf('week').isoWeekday(index));
        }

        return days;
    }

    const formatDate = (date) => {
        let formated = moment(date);
        
        return formated.locale("fr").format("dd.DD");
    }

    return (
        <>
            <Container>
                <div className="bg">
                    <Image placeholder="blur" blurDataURL={"/images/placeholders/movie-card.jpg"} quality={90} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/original" + props.data.backdrop_path} priority />
                </div>

                {/* Embedded youtube player */}
                {showPlayer && (
                    <div className="player-container" onClick={() => setShowPlayer(false)}>
                        <div className="player-wrapper">
                            <iframe src={`https://www.youtube.com/embed/${props.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowFullScreen></iframe>
                        </div>
                    </div>
                )}

                <Wrapper>
                    <h1>{props.data.title}</h1>

                    {/* Release date, duration and tags */}
                    <div className="meta">
                        <span>{props.data.release_date} - </span>
                        <span>{props.data.runtime} minutes - </span>
                        {props.data.genres.map((genre, index) => {
                            return (<span key={index}>{genre.name} </span>)
                        })}
                    </div>

                    <div className="buttons">
                        <button onClick={() => { setShowPlayer(true); }}>Bande annonce</button>
                        <button onClick={() => {dispatch(addItem(props.data))}}>Réserver</button>
                    </div>

                    <div className="overview">
                        {props.data.overview}
                    </div>

                    {/* Just show some examples */}
                    <Calendar>
                        <table>
                            <tr>

                                {currentWeek().map((day,index) => {
                                    if(moment(day).isSame(new Date(), "day")){
                                        return (<th key={index}>{"Aujourd'hui"}</th>)
                                    }else{
                                        return (<th key={index}>{formatDate(day)}</th>)
                                    }
                                })}
                                
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
                </Wrapper>
            </Container>
        </>
    )
}