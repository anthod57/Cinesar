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