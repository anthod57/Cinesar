import styled from "styled-components";

export const Container = styled.div`  
    max-width: 1100px;
    margin: auto;

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

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    

    @media only screen and (min-width: 768px){
        flex-direction: ${props => props.fullScreen ? "column" : "row"};
    }
`

export const Article = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    margin: auto;

    .illustration {
        width: 100%;
        height: 300px;
        position: relative;

        img {
            transition: all ease-in-out 0.2s;
        }

        &:hover {
            img {
                transform: scale(1.1);
            }
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        height: 100%;

        h3 {
            margin: 1em;
            font-family: 'Roboto',sans-serif;
            font-weight: bold;
        }

        .preview {
            margin: 0.5em;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5; /* number of lines to show */
                    line-clamp: 5; 
            -webkit-box-orient: vertical;
            line-height: 1.1em;
        }

        .meta {
            margin-top: auto;
            padding: 0 1em;
            text-align: right;

            .post-date {
                font-style: italic;
                font-size: 12px;
            }
        }
    }

    @media only screen and (min-width: 768px){
        flex-direction: row;
        width: ${props => props.fullScreen ? "100%" : "500px"};
        height: 150px;
        margin: ${props => props.fullScreen ? "0.5em" : "auto auto 1em auto"};

        .illustration {
            aspect-ratio: 2/1;
            width: 200px;
            height: 150px;
        }

        .text {
            h3 {
                margin: 0;
                margin-left: 0.5em;
            }

            .preview {
                -webkit-line-clamp: ${props => props.fullScreen ? "4" : "2"};
                    line-clamp: ${props => props.fullScreen ? "4" : "2"};; 
                -webkit-box-orient: vertical;
                height: ${props => props.fullScreen ? "4.4em" : "2.2em"};
            }
        }
    }
`;