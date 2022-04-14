import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Slider, SliderContainer, Slide } from '../styles/StyledMovies';

export const Movies = (props) => {

    const placeHolder = React.createRef();
    const container = React.createRef();

    useEffect(() => {
        if (props.data) {
            placeHolder.current.remove();
            container.current.style = "";
        }
    }, [])


    return (
        <>
            <Slider onClick={() => { updateSlider() }}>
                <h2>{props.title}</h2>
                <SliderContainer ref={placeHolder} animate={false}>
                    <Slide>
                        <div className="picture">
                            <Image layout='fill' objectFit='cover' src={"/images/placeholder.jpg"} priority />
                        </div>
                    </Slide>
                    <Slide>
                        <div className="picture">
                            <Image layout='fill' objectFit='cover' src={"/images/placeholder.jpg"} priority />
                        </div>
                    </Slide>
                    <Slide>
                        <div className="picture">
                            <Image layout='fill' objectFit='cover' src={"/images/placeholder.jpg"} priority />
                        </div>
                    </Slide>
                    <Slide>
                        <div className="picture">
                            <Image layout='fill' objectFit='cover' src={"/images/placeholder.jpg"} priority />
                        </div>
                    </Slide>   
                    <Slide>
                        <div className="picture">
                            <Image layout='fill' objectFit='cover' src={"/images/placeholder.jpg"} priority />
                        </div>
                    </Slide>      
                </SliderContainer>
                <SliderContainer ref={container} style={{display: "none"}}>
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
