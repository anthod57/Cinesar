import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;

  .bg {
    width: 100%;
    height: 250px;
    position: relative;
    z-index: 0;

    @media only screen and (min-width: 768px){
        position: absolute;
        height: calc(100vh - 80px);
        filter: brightness(0.5);
    }
  }

  .player-container {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: #000000d6;
    z-index: 5;
    top: 0px;
    padding: 1em;

    .player-wrapper {
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
    }

    @media only screen and (min-width: 768px){
        padding: 5em;
    }
  }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    z-index: 2;
    text-align: center;

    h1 {
        font-size: 3em;
    }

    .buttons {
        display: flex;
        flex-direction: column;

        button {
                margin: 4px;
            }
    }

    .meta {
        margin: 0.5em 0;
    }

    .overview {
        margin: 1em 0;
    }

    @media only screen and (min-width: 768px){
        position: absolute;
        padding-top: 200px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: left;

        h1 {
            font-size: 4em;
        }

        .buttons {
            flex-direction: row;
            
            button {
                margin-right: 4px;
            }
        }

        .overview {
            max-width: 800px;
        }
    }
`