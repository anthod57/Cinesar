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

    .inputs {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        padding: 1em;
        padding-bottom: 0px;

        input {
            width: 100%;
            margin: 0.5em;
        }
        
        button {
            margin: 0.5em;
            border-radius: 5px;
            width: 100%;
        }
    }

    .more {
        padding: 0px 1em;
        text-align: center;
        span {
            font-size: 0.8em;
            margin: 0.5em;
        }
    }

    .error {
        padding: 0px 1em;
        font-size: 0.8em;
        margin: 0.5em;
        text-align: center;
        font-weight: bold;
        color: #D90429;
    }

    @media only screen and (min-width: 768px){
        padding-top: 100px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
        width: 100%;

        .inputs {
            align-items: flex-start;
            input {
                max-width: 300px;
            }

            button {
                max-width: 300px;
            }
        }

        .more {
            text-align: left;
        }
        
        .error {
            text-align: left;
        }
    }
`;