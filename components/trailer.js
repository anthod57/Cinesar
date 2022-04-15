import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../styles/StyledTrailer";

export const Trailer = (props) => {
  const TrailerContainer = React.createRef();
  const [showTrailer, setTrailer] = useState(null);

  useEffect(() => {
    setTrailer(props.show)
  }, [props]);

  return (
    <>
      <Container
        ref={TrailerContainer}
        style={showTrailer ? {} : { display: "none" }}
        onClick={() => {
            setTrailer(null);
        }}
      >
        <Wrapper>
          <iframe
            key={showTrailer}
            src={showTrailer ? `https://www.youtube.com/embed/${props.trailerUrl}` : ""}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Wrapper>
      </Container>
    </>
  );
};
