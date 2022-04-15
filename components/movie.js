import React, {useState} from 'react'
import { Container, Wrapper } from '../styles/StyledMovie'
import Image from './image'
import { Trailer } from './trailer'
import axios from 'axios'
import { HOST } from '../config'

export const Movie = (props) => {

    const TrailerContainer = React.createRef();
    const [showTrailer, setShowTrailer] = useState(true);
    const [trailer, setTrailer] = useState(null);

    const getTrailer = async (id) => {
        setShowTrailer(!showTrailer);

        if(showTrailer){
            await axios.get(`${HOST}/api/trailer?id=${id}`).then(response => {
                const url = "https://www.youtube.com/embed/" + response.data;
                setTrailer(url);
            }).catch((error) => {
    
                return null;
            })
        }
    }

    return (
        <>
            <Container>
                <div className="bg">
                    <Image quality={90} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/original" + props.data.backdrop_path} loading="lazy" />
                </div>
                <Trailer trailerUrl={trailer} ref={TrailerContainer}></Trailer>
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
                        <button onClick={() => getTrailer(props.data.id)}>Bande annonce</button>
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