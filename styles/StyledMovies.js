import styled, { keyframes } from "styled-components";

export const moveSlideshowMobile = keyframes`

    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-5800px, 0, 0);  
    }
`

export const moveSlideshowDesktop = keyframes`

    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-6800px, 0, 0);
    }
`


export const Slider = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    h2 {
        margin: 1em 0;
        padding-left: 0.5em;
        font-size: 2em;
        width: 100%;
    }

    @media only screen and (min-width: 768px){
        h2 {
            font-size: 3em;
            max-width: 500px;
        }
    }   
`

export const SliderContainer = styled.div`
    flex-grow: 1;
    display: flex;
    width: calc(10100px);
    transform: translate3d(0, 0, 0);
    height: 100%;
    animation: ${moveSlideshowMobile} 40s linear infinite;
    margin: auto;

    &:hover {
        animation-play-state: paused;
    }

    @media only screen and (min-width: 768px){
        width: 100%;
        position: relative;
        animation: ${moveSlideshowDesktop} 40s linear infinite;
    }   
`

export const Slide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 290px;
    flex-shrink: 0;
    padding: 20px;
    position: relative;
    transition: all ease-in-out 0.5s;

    .picture {
        aspect-ratio: 1/1.5;
        width: 100%;
        position: relative;
        box-shadow: 0px 0px 14px 3px #000000;
    }

    @media only screen and (min-width: 768px){
        width: 340px;
        .picture {
            height: 400px;
            
        }
    }

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`

export const SliderController = styled.div`
    background-color: black;
    height: 100%;
`