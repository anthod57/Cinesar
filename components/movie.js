import React, {useState, useEffect} from 'react'
import { Container, Wrapper } from '../styles/StyledMovie'
import Image from './image'

export const Movie = (props) => {

    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <>
            <Container>
                <div className="bg">
                    <Image placeholder="blur" blurDataURL={"/images/placeholders/movie-card.jpg"} quality={90} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/original" + props.data.backdrop_path} priority />
                </div>

                {showPlayer && (
                    <div className="player-container" onClick={() => setShowPlayer(false)}>
                        <div className="player-wrapper">
                            <iframe src={`https://www.youtube.com/embed/${props.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "allowFullScreen></iframe>
                        </div>
                    </div>
                )}

                <Wrapper>
                    <h1>{props.data.title}</h1>
                    <div className="meta">
                        <span>{props.data.release_date} - </span>
                        <span>{props.data.runtime} minutes - </span>
                        {props.data.genres.map((genre, index) => {
                            return (<span key={index}>{genre.name} </span>)
                        })}
                    </div>
                    <div className="buttons">
                        <button onClick={() => {setShowPlayer(true);}}>Bande annonce</button>
                        <button>Reserver</button>
                    </div>
                    <div className="overview">
                        {props.data.overview}
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}