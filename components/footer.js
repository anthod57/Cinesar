import React from 'react'
import Link from 'next/link';

import { Container, Wrapper, Copyright, SiteMap } from "../styles/StyledFooter";

export const Footer = (props) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <SiteMap>
                        <ul>
                            {props.menu?.map((item, index) => {
                                return (
                                    <Link key={index} href={item.link}><a><li>{item.text}</li></a></Link>
                                )
                            })}
                        </ul>
                    </SiteMap>
                    <Copyright>
                        ©2022 Sinésar - Crée par <a href="https://anthonydragun.fr/">AD</a>
                    </Copyright>
                </Wrapper>
            </Container>
        </>
    )
}
