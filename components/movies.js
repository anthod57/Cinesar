import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Slider, SliderContainer, Slide } from '../styles/StyledMovies';

export const Movies = (props) => {

    useEffect(() => {

    }, [])


    return (
        <>
            <Slider onClick={() => { updateSlider() }}>
                <h2>{props.title}</h2>
                <SliderContainer>
                    {props.data.results ? props.data.results?.map((movie, index) => {
                        return (
                            <Slide key={index}>
                                <div className="picture">
                                    <Image quality={100} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} loading="lazy"/>
                                </div>
                            </Slide>
                        )
                    }) : ""}
                    {props.data.results ? props.data.results?.map((movie, index) => {
                        return (
                            <Slide key={index}>
                                <div className="picture">
                                    <Image quality={100} layout='fill' objectFit='cover' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} loading="lazy"/>
                                </div>
                            </Slide>
                        )
                    }) : ""}
                </SliderContainer>
            </Slider>
        </>
    )
}
