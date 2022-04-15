import styled from "styled-components";

export const Container = styled.footer`
    height: 200px;
    width: 100%;
    background-color: #D90429;
    background: linear-gradient(0deg, rgba(120,2,23,1) 0%, rgba(217,4,41,1) 100%);
    box-shadow: 2px 2px 15px 0px #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    text-align: center;
`

export const SiteMap = styled.div`
    height: 100%;

    ul {
        list-style: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;

        a, a:hover, a:visited, a:active {
            text-decoration: none;
        } 
    }

    @media only screen and (min-width: 768px){

    }
`

export const Copyright = styled.div`
    width: 100%;
`