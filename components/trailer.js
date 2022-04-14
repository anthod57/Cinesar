import React, {useEffect, useState} from 'react'
import { Container, Wrapper } from "../styles/StyledTrailer";

export const Trailer = (data) => {

    const trailerContainer = React.createRef();

    useEffect(() => {

    }, [data])

    return (
        <>
            <Container id={data.id} style={{display: "none"}} ref={trailerContainer} onClick={() => {trailerContainer.current.style = "display: none;"}}>
                <Wrapper>
                    <iframe id={"trailer-iframe"} src={`https://www.youtube.com/embed/${data.videoKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Wrapper>
            </Container>
        </>
    )
}
