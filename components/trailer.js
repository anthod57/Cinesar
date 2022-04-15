import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../styles/StyledTrailer";

export const Trailer = (props) => {
  const TrailerContainer = React.createRef();
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    setTrailer(props.trailerUrl)
    console.log(props);
  }, [props]);

  return (
    <>
      <Container
        ref={TrailerContainer}
        style={trailer ? {} : { display: "none" }}
        onClick={() => {
            setTrailer(null);
        }}
      >
        <Wrapper>
          <iframe
            src={trailer ? trailer : ""}
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
