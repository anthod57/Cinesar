import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    padding: 1em;
    padding-top: calc(1em + 80px);
    z-index: 5;
    background-color: #000000cc;
`;

export const Wrapper = styled.div`
    overflow: hidden;
    position: relative;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
        padding-top: 56.25%;
        display: block;
        content: '';
    }

    iframe {
        aspect-ratio: 16/9;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        max-width: 1280px;
    }

`;