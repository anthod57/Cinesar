import React from 'react'
import { Container, Copyright, SiteMap } from "../styles/StyledFooter";
import Link from 'next/link';

export const Footer = (props) => {
    return (
        <>
            <Container>
                <SiteMap>
                    <ul>
                        {props.menu?.map((item, index) => {
                                return(
                                    <Link key={index} href={item.link}><a><li>{item.text}</li></a></Link>
                                )
                        })}
                    </ul>
                </SiteMap>
                <Copyright>
                    <p>©2022 Sinésar - Crée par <a href="https://anthonydragun.fr/">AD</a></p>
                </Copyright>
            </Container>
        </>
    )
}
