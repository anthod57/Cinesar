import React, { useState, useRef, useEffect } from 'react'
import Image from "./image";
import Link from 'next/link';
import { Slider, SliderContainer, Slide } from '../styles/StyledMovies';

export const Movies = (props) => {
    return (
        <>
            <Slider>
                <h2>{props.title}</h2>
                <SliderContainer>
                    {/* Display 20 max movies */}
                    {props.data.results ? props.data.results.slice(0, 20).map((movie, index) => {
                        return (
                            <Slide key={index}>
                                <div className="picture">
                                    <Image placeholder="blur" blurDataURL="/images/placeholder.jpg" quality={90} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} loading="lazy" />
                                </div>
                                <div className="back">
                                    <h3>{movie.title}</h3>
                                    <p className="overview">{movie.overview}</p>
                                    <div className="more">
                                        <Link href={`/film/${movie.id}`}><button>{"Infos & horaires"}</button></Link>
                                        <button>Réserver</button>
                                    </div>
                                </div>
                            </Slide>
                        )
                    }) : ""}
                    {/* Clone 6 movies to make the animation loop smoother */}
                    {props.data.results ? props.data.results.slice(0, 6).map((movie, index) => {
                        return (
                            <Slide key={index}>
                                <div className="picture">
                                    <Image placeholder="blur" blurDataURL="/images/placeholder.jpg" quality={90} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} loading="lazy" />
                                </div>
                                <div className="back">
                                    <h3>{movie.title}</h3>
                                    <p className="overview">{movie.overview}</p>
                                    <div className="more">
                                        <Link href={`/film/${movie.id}`}><button>{"Infos & horaires"}</button></Link>
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
