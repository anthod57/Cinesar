import styled from "styled-components";

export const Container = styled.div`
    max-width: 1100px;
    margin: auto;

    h1 {
        margin: 1em 0;
        padding-left: 0.5em;
        font-size: 2em;
        width: 100%;
    }

    @media only screen and (min-width: 768px){
        h1 {
            font-size: 3em;
            max-width: 500px;
        }
    }  
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 1em;
    .movie {
        width: 100%;
        height: 100%;
        margin-bottom: 1em;
        padding: 1em;
        display: flex;
        background-color: #17192e;
        flex-direction: column;

        h2 {
            font-size: 2em;
        }

        .content {
            display: flex;
            flex-direction: column;
            
            .poster {
                margin-top: 1em;
                margin-bottom: 1em;
                width: 100%;
                height: 400px;
                position: relative;
                flex-shrink: 0;
            }

            .infos {
                display: flex;
                flex-direction: column;

                .overview {
                    margin-top: 1em;
                    display: none;
                }

                .buttons {
                    margin-top: 1em;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;

                    a {
                        width: 100%;
                        text-decoration: none;
                        margin: 0.5em;
                    }

                    button {
                        width: 100%;
                    }
                }
            }
        }
    }
    

    @media only screen and (min-width: 768px){
        align-items: flex-start;

        .movie {
            .content {
                flex-direction: row;
                align-items: flex-start;

                .poster {
                    width: 300px;
                }

                .infos {
                    margin: 1em;

                    
                    .overview {
                        display: block;
                    }

                    .buttons {
                        justify-content: flex-start;
                        flex-wrap: nowrap;

                        a {
                            max-width: 200px;
                        }

                        button {
                            margin: 0%;
                            margin-right: 0.5em;
                            
                        }
                    }
                }
            }
        }
    }
`;

export const Calendar = styled.div`
    width: 100%;
    height: 100%;
    font-size: 0.7em;
    margin-top: 1em;

    table {
        width: 100%;
        border-collapse: collapse;

        th, td {
            text-align: center;
        }

        th {
            background-color: #D90429;
            background: linear-gradient(0deg,rgba(120,2,23,1) 0%,rgba(217,4,41,1) 100%);
            border: none;
            padding: 0.5em;
        }

        td {
            background-Color: #17192e;
            padding: 10px 0;
        }
    }

    @media only screen and (min-width: 768px){
        font-size: 1em;
    }
`