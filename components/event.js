import React from 'react'
import Image from './image'
import parse from 'html-react-parser'

import { Container, Wrapper } from "../styles/StyledEvent"
import { Events } from './events'
import { EVENTS_ITEMS } from '../data/events'

export const Event = (props) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <h1>{props.article.title}</h1>

                    <div className="meta">
                        <span>{props.article.postDate}</span>
                    </div>

                    <div className="article-image">
                        <Image placeholder="blur" blurDataURL={"/images/placeholders/movie-card.jpg"} quality={90} layout='fill' objectFit='cover' src={props.article.image} priority />
                    </div>

                    <div className="article-text">
                        {parse(props.article.text)}
                    </div>
                </Wrapper>

                <section id="events" style={{ backgroundColor: "#17192e" }}>
                        <Events title={"Autres évenements"} current={props.article.slug} data={EVENTS_ITEMS}></Events>
                </section>
            </Container>
        </>
    )
}
