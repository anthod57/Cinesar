import React, {useState, useEffect} from 'react'
import { Container, Wrapper } from '../styles/StyledMovie'
import Image from './image'
import { Trailer } from './trailer'
import axios from 'axios'
import { HOST } from '../config'

export const Movie = (props) => {

    const TrailerContainer = React.createRef();
    const [showTrailer, setShowTrailer] = useState(false);

    return (
        <>
            <Container>
                <div className="bg">
                    <Image quality={90} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/original" + props.data.backdrop_path} priority />
                </div>
                <Trailer show={showTrailer} trailerUrl={props.trailer} ref={TrailerContainer}></Trailer>
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
                        <button onClick={() => setShowTrailer(true)}>Bande annonce</button>
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