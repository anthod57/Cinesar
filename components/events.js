import React from 'react'
import Image from "./image";
import parse from 'html-react-parser'
import Link from 'next/link';

import { Container, Wrapper, Article } from '../styles/StyledEvents';

export const Events = (props) => {
    return (
        <>
            <Container>
                <h2>{props.title}</h2>

                <Wrapper>

                    {props.data?.map((article, index) => {
                        if (props.current != article.slug) {
                            return (
                                <Article key={index}>
                                    <Link href={`/evenements/${article.slug}`}>
                                        <a>
                                            <div className="illustration">
                                                <Image layout='fill' objectFit='cover' src={article.image} loading="lazy" />
                                            </div>
                                        </a>
                                    </Link>

                                    <div className="text">
                                        <Link href={`/evenements/${article.slug}`}>
                                            <a>
                                                <h3>{article.title}</h3>
                                            </a>
                                        </Link>

                                        <p className="preview">
                                            {parse(article.text)}
                                        </p>

                                        <div className="meta">
                                            <span className="post-date">{article.postDate}</span>
                                        </div>
                                    </div>
                                </Article>
                            )
                        }
                    })}

                </Wrapper>
            </Container>
        </>
    )
}
