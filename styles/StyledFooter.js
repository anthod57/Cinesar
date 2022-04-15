import styled from "styled-components";

export const Container = styled.footer`
    height: 250px;
    width: 100%;
    background-color: #D90429;
    background: linear-gradient(0deg, rgba(120,2,23,1) 0%, rgba(217,4,41,1) 100%);
    box-shadow: 2px 2px 15px 0px #000000;

    a, a:hover, a:visited, a:active {
        text-decoration: underline;
    } 
`

export const Wrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    text-align: center;

    @media only screen and (min-width: 768px){
        text-align: left;
        align-items: flex-start;
        
    }
`

export const SiteMap = styled.div`
    height: 100%;

    ul {
        list-style: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        margin: 1em;
    }
`

export const Copyright = styled.div`
    text-align: center;
    width: 100%;
`