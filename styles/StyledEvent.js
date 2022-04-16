import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    z-index: 2;
    text-align: left;

    h1 {
        font-size: 3em;
    }

    .meta {
        font-style: italic;
        font-size: 0.8em;
    }

    .article-image {
        margin-top: 2em;
        margin-bottom: 1em;
        width: 100%;
        height: 250px;
        position: relative;
    }

    .article-text {
        
    }

    @media only screen and (min-width: 768px){
        padding-top: 100px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
        left: 0;
        right: 0;
        text-align: left;

        .article-image {
            max-width: 500px;
        }

        .article-text {
            max-width: 800px;
        }
    }
`