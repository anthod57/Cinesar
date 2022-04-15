import React from 'react'
import Image from "./image";

import { Container, Wrapper, Article } from '../styles/StyledNews';

export const News = (props) => {
    return (
        <>
            <Container>
                <h2>Évenements</h2>

                <Wrapper>

                    {props.data?.map((article, index) => {
                        return (
                            <Article key={index}>
                                <div className="illustration">
                                    <Image layout='fill' objectFit='cover' src={article.image} loading="lazy" />
                                </div>

                                <div className="text">
                                    <h3>{article.title}</h3>

                                    <p className="preview">
                                        {article.text}
                                    </p>

                                    <div className="meta">
                                        <span className="post-date">{article.postDate}</span>
                                    </div>
                                </div>
                            </Article>
                        )
                    })}

                </Wrapper>
            </Container>
        </>
    )
}
