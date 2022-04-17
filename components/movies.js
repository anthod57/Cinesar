import React, {useEffect} from 'react'
import Image from "./image";
import Link from 'next/link';

import { Slider, SliderContainer, Slide } from '../styles/StyledMovies';
import { useDispatch } from 'react-redux';
import { addItem, clearItems } from '../redux/features/cartSlice';

export const Movies = (props) => {

    {/* Using lazyroot avoid lazy images not showing on scrollable div */ }
    const lazyRoot = React.createRef();

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(clearItems(0));
    }, [])

    return (
        <>
            <Slider ref={lazyRoot}>
                <h2>{props.title}</h2>

                <SliderContainer>

                    {/* Display 20 max movies */}

                    {props.data.results ? props.data.results.slice(0, 20).map((movie, index) => {
                        return (
                            <Slide key={index}>
                                <div className="picture">
                                    <Image alt={movie.title} lazyBoundary="100px" placeholder="blur" blurDataURL={"/images/placeholders/movie-card.jpg"} lazyRoot={lazyRoot} quality={80} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} loading="lazy" />
                                </div>

                                <div className="back">
                                    <h3>{movie.title}</h3>

                                    <p className="overview">{movie.overview}</p>

                                    <div className="more">
                                        <Link href={`/film/${movie.id}`}><a><button>{"Infos & horaires"}</button></a></Link>
                                        <button onClick={() => {dispatch(addItem(movie))}}>Réserver</button>
                                    </div>
                                </div>
                            </Slide>
                        )
                    }) : ""}

                    {/* Clone 6 movies to make the looped animation smoother and not cutting when ending */}

                    {props.data.results ? props.data.results.slice(0, 6).map((movie, index) => {
                        return (
                            <Slide key={index}>
                                <div className="picture">
                                    <Image alt={movie.title} placeholder="blur" lazyBoundary="100px" blurDataURL={"/images/placeholders/movie-card.jpg"} lazyRoot={lazyRoot} quality={80} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} loading="lazy" />
                                </div>

                                <div className="back">
                                    <h3>{movie.title}</h3>

                                    <p className="overview">{movie.overview}</p>

                                    <div className="more">
                                        <Link href={`/film/${movie.id}`}><a><button>{"Infos & horaires"}</button></a></Link>
                                        <button>Réserver</button>
                                    </div>
                                </div>
                            </Slide>
                        )
                    }) : ""}
                </SliderContainer>
            </Slider>
        </>
    )
}
