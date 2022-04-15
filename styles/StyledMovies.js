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

    a {
        text-decoration: none;
    }
`

export const SliderContainer = styled.div`
    flex-grow: 1;
    display: flex;
    width: calc(10100px);
    transform: translate3d(0, 0, 0);
    height: 100%;
    animation: ${props => props.animate == false ? "" : moveSlideshowMobile} 40s linear infinite;
    margin: auto;

    &:hover {
        animation-play-state: paused;
    }

    @media only screen and (min-width: 768px){
        width: 100%;
        position: relative;
        animation: ${props => props.animate == false ? "" : moveSlideshowDesktop} 40s linear infinite;
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
        z-index: 3;
        box-shadow: 0px 0px 14px 3px #000000;
        transition: all 0.5s;
        -webkit-touch-callout: none;      
    }

    
    .back {
        transform: rotateY(180deg);
        position: absolute;
        color: white;
        width: 250px;
        height: 375px;
        z-index: 2;
        transition: all 0.5s;
        text-align: center;
        padding: 5px;
        display: flex;
        flex-direction: column;
        opacity: 0;

        h3 {
            font-size: 2em;
            margin-bottom: 0.5em;
        }

        .overview {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 10; /* number of lines to show */
                    line-clamp: 10; 
            -webkit-box-orient: vertical;
            font-size: 0.8em;
        }

        .more {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 5px;
            justify-content: end;

            button {
                width: 100%;
                justify-content: center;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                flex-grow: 1;
                margin: 5px 0;
                max-height: 40px;
            }
        }
    }

    @media only screen and (min-width: 768px){
        width: 340px;

        .picture {
            height: 400px;       
        }

        .back {
            width: 300px;
            height: 400px;
        }
    }

    &:hover {
        
        cursor: pointer;

        .back {
            transform: rotateY(0deg);
            opacity: 1;
            z-index: 3;
        }

        .picture {
            transform: rotateY(180deg);
            z-index: 2;
            filter: blur(8px) brightness(0.2);
        }
    }
`

export const SliderController = styled.div`
    background-color: black;
    height: 100%;
`