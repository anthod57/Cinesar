import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0; 
        border: 0; 
    }

    *:focus {
        outline: none;
    }


    html, body {
        background-color: #2B2D42;
        font-family: 'Roboto', sans-serif;
        color: white;
        overflow-x: hidden;
        font-size: 16px;
    }

    body {

    }

    h1, h2, h3, h4 {
        font-family: 'Bebas Neue', cursive;
    }

    i {
        font-family: "Font Awesome 6 Free";
    }

    a, a:hover, a:visited, a:active {
        color: inherit;
    }

    main {
        height: 100%;
        width: 100%;
        margin: auto;
        padding-top: 80px;
        overflow-x: hidden;
    }

    section {
        overflow: hidden;
        padding-bottom: 2em;
    }

    button {
        padding: 0.8rem 1.25rem;
        text-decoration: none;
        border-radius: 0.75rem;
        display: flex;
        cursor: pointer;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.25s ease-in-out;
        transition-property: color, background-color;
        background-color: #D90429;
        color: white;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: #e30e33;
        }

        &:active {
            background-color: #c50015;
        }
    }

    input {
        padding: 0.8rem 1.25rem;
        border: #4e527a 1px solid;
        background-color:#17192e;
        color: white;
        margin: 1em;
    }
`;
