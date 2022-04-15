import styled from "styled-components";

export const Nav = styled.div`
    height: 80px;
    width: 100vw;
    background-color: #D90429;
    background: linear-gradient(0deg, rgba(120,2,23,1) 0%, rgba(217,4,41,1) 100%);
    box-shadow: 2px 2px 15px 0px #000000;
    position: fixed;
    z-index: 3;

    a, a:hover, a:visited, a:active {
        text-decoration: none;
        height: 100%;
    } 
`

export const Container = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1100px;
    height: 100%;
    display: flex;
    padding: 0 1em;
`

export const LogoContainer = styled.div`
    height: 80px;

    h2 {
        height: 100%;
        align-items: center;
        display: flex;
        font-size: 3em;
    }
`

export const MobileMenuIcon = styled.div`
    margin-left: auto;
    width: 80px;
    height: 80px;
    font-size: 2.5em;
    display: flex;

    @media only screen and (min-width: 768px){
        display: none;
    }

    i {
        margin: auto;
    }
`

export const Menu = styled.div`
    top: 0px;
    margin-top: 80px;
    right: 0;
    position: absolute;
    width: 50%;

    text-align: center;
    transition: right 0.2s ease-in-out;

    ul {
        height: 100vh;
        background-color: rgba(120,2,23,1);
        list-style: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;

        li {
            font-size: 1.2em;
            padding: 5px;
            transition: all 0.1s linear;

            &:hover {
                background-color: #640003;
                cursor: pointer;
            }
        }

        .active {
            background-color: #640003;

            li {
                background-color: #640003;
            }
        }
    }

    @media only screen and (min-width: 768px){
        position: relative;
        background-color: transparent;
        height: 100%;
        margin: auto;
        justify-content: flex-end;
        right: 0 !important;
        transition: unset;
        width: 100%;

        ul {
            background-color: transparent;
            flex-direction: row;
            padding-top: 0px;
            height: 100%;
            align-items: center;
            display: flex;   
            justify-content: flex-end; 

            li {
                padding: 0.5em;
                height: 100%;
                align-items: center;
                justify-content: center;
                display: flex;
            }
        }
    }
`;