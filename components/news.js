import React from 'react'
import Image from 'next/image';
import { Container, Wrapper, Article } from '../styles/StyledNews';

export const News = () => {
    return (
        <>
            <Container>
                <h2>Évenements</h2>
                <Wrapper>            
                    <Article>
                        <div className="illustration">
                            <Image layout='fill' objectFit='cover' src={"/images/articles/covid.png"} loading="lazy" />
                        </div>
                        <div className="text">
                            <h3>Mesures sanitaires du 14 Mars 2022</h3>
                            <p className="preview">
                                {"PORT DU MASQUE : Le port du masque n'est plus obligatoire mais fortement conseillé ! Les distanciations sont toujours obligatoires au sein du cinéma CinéSar ! Nous vous remercions pour le respect de ces consignes afin que les séances se déroulent dans des conditions optimales pour chaque spectateur."}
                            </p>
                            <div className="meta">
                                <span className="post-date">Lundi 14 Mars 2022 - 17:00</span>
                            </div>
                        </div>
                    </Article>   
                    <Article>
                        <div className="illustration">
                            <Image layout='fill' objectFit='cover' src={"/images/articles/covid.png"} loading="lazy" />
                        </div>
                        <div className="text">
                            <h3>Mesures sanitaires du 14 Mars 2022</h3>
                            <p className="preview">
                                {"PORT DU MASQUE : Le port du masque n'est plus obligatoire mais fortement conseillé ! Les distanciations sont toujours obligatoires au sein du cinéma CinéSar ! Nous vous remercions pour le respect de ces consignes afin que les séances se déroulent dans des conditions optimales pour chaque spectateur."}
                            </p>
                            <div className="meta">
                                <span className="post-date">Lundi 14 Mars 2022 - 17:00</span>
                            </div>
                        </div>
                    </Article>  
                    <Article>
                        <div className="illustration">
                            <Image layout='fill' objectFit='cover' src={"/images/articles/covid.png"} loading="lazy" />
                        </div>
                        <div className="text">
                            <h3>Mesures sanitaires du 14 Mars 2022</h3>
                            <p className="preview">
                                {"PORT DU MASQUE : Le port du masque n'est plus obligatoire mais fortement conseillé ! Les distanciations sont toujours obligatoires au sein du cinéma CinéSar ! Nous vous remercions pour le respect de ces consignes afin que les séances se déroulent dans des conditions optimales pour chaque spectateur."}
                            </p>
                            <div className="meta">
                                <span className="post-date">Lundi 14 Mars 2022 - 17:00</span>
                            </div>
                        </div>
                    </Article>  
                    <Article>
                        <div className="illustration">
                            <Image layout='fill' objectFit='cover' src={"/images/articles/covid.png"} loading="lazy" />
                        </div>
                        <div className="text">
                            <h3>Mesures sanitaires du 14 Mars 2022</h3>
                            <p className="preview">
                                {"PORT DU MASQUE : Le port du masque n'est plus obligatoire mais fortement conseillé ! Les distanciations sont toujours obligatoires au sein du cinéma CinéSar ! Nous vous remercions pour le respect de ces consignes afin que les séances se déroulent dans des conditions optimales pour chaque spectateur."}
                            </p>
                            <div className="meta">
                                <span className="post-date">Lundi 14 Mars 2022 - 17:00</span>
                            </div>
                        </div>
                    </Article>  
                </Wrapper>
            </Container>
        </>
    )
}
