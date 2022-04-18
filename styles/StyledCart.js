import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: calc(100vh - 600px);
    right: ${props => props.show ? "0px" : "-80%"};
    z-index: 99;
    background-color: red;
    width: 80%;
    height: 500px;
    background-color: #212338;
    transition: all 0.5s;
    display: flex;
    padding: 1em;
    flex-direction: column;

    @media only screen and (min-width: 768px){
        width: 400px;
        right: ${props => props.show ? "0px" : "-400px"};
    }

    h3 {
        text-align: center;
        font-size: 2em;
    }

    span {
        margin-bottom: 0.5em;
        text-align: right;
    }
`

export const Wrapper = styled.div`
    background-color:#17192e;
    height: 100%;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 1em;
    overflow-y: auto;
    padding: 1em;
`

export const ShowButton = styled.div`
    background-color: #D90429;
    border-radius: 20px 0 0 20px;
    background: linear-gradient(0deg,rgba(120,2,23,1) 0%,rgba(217,4,41,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 15%;
    font-size: 2em;
    left: -20%;
    bottom: 50px;
    cursor: pointer;
    position: absolute;
    opacity: ${props => props.show ? "1" : "0.3"};
    transition: all 0.5s;

    &:hover {
        opacity: 1;
    }

    @media only screen and (min-width: 768px){
        width: 80px;
        height: 80px;
        left: -80px;
    }

`

export const Ticket = styled.div`
    width: 100%;
    border-radius: 10px;
    height: 150px;
    position: relative;
    margin-bottom: 1em;

    .ticket-bg {
        position: absolute;
        width: 100%;
        height: 150px;
        border-radius: 10px;
    }

    img {
        border-radius: 10px;
        filter: blur(2px) brightness(0.75);
    }

    .ticket-content {
        position: relative;
        padding: 0.5em;
        width: 100%;
        height: 100%;

        .fa-close {
            position: absolute;
            right: 0.5em;
            font-size: 1.5em;
            cursor: pointer;
            color: #17192e;
        }

        h4 {
            text-align: left;
            font-size: 1.5em;
        }

        select {
            width: 100%;
            height: 1.5em;
            border: #4e527a 1px solid;
            background-color: #17192e;
            color: white;
            font-size: 1em;
            margin-bottom: 0.5em;
            border-radius: 5px;
        }

        input[type=number] {
            width: 50px;
            height: 1.5em;
            border: #4e527a 1px solid;
            background-color: #17192e;
            color: white;
            font-size: 1em;
            padding: 0;
            padding-left: 4px;
            margin: 0;
            margin-left: 0.5em;
            border-radius: 5px;
        }
    }

    @media only screen and (min-width: 768px){
        height: 150px;
    }   
`