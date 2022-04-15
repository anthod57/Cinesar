import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: #000000d6;
    z-index: 5;
    top: 0px;
    padding: 1em;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;


    iframe {
        aspect-ratio: 16/9;
        width: 100%;
        max-width: 1280px;
        height: auto;
    }

    @media only screen and (min-width: 768px){
        padding: 5em;
    }
`