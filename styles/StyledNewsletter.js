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
        flex-direction: row;
    }
`

export const Form = styled.form`
    text-align: center;
    width: 80%;
    margin: auto;

    .newsletter-input {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            border-radius: 2px;
        }
    }

    span {
        font-size: 0.8em;
        margin: 1em;
    }

    @media only screen and (min-width: 768px){
        .newsletter-input {
            input {
                min-width: 300px;
            }
        }
    }
`;