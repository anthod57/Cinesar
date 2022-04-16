import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import { Nav, Container, LogoContainer, MobileMenuIcon, Menu } from "../styles/StyledNavbar";

export const Navbar = (props) => {

    const [showMobileMenu, setMobileMenu] = useState(false);
    const MenuRef = React.createRef();

    useEffect(() => {
        // Make current link active (depends of props.active index)
        if (props.active > -1) {
            MenuRef.current.children[0].children[props.active].className = "active";
        }
    })

    const showMenu = () => {
        setMobileMenu(!showMobileMenu);
        if (showMobileMenu) {
            MenuRef.current.style = "right: -50%;";
        } else {
            MenuRef.current.style = "right: 0px;";
        }
    }

    return (
        <>
            <Nav>
                <Container>
                    <LogoContainer>
                        <Link href="/">
                                <h2>CinéSar</h2>
                        </Link>
                    </LogoContainer>

                    <MobileMenuIcon onClick={showMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </MobileMenuIcon>

                    <Menu ref={MenuRef} style={{ right: "-50%" }}>
                        <ul>

                            {props.menu?.map((item, index) => {
                                if(props.currentUser){
                                    if(item.hideIfLogged) return;
                                }else{
                                    if(item.loginRequired) return;
                                }

                                return (
                                    <Link key={index} href={item.link}><a><li onClick={showMenu}>{item.text}</li></a></Link>
                                )
                            })}

                        </ul>
                    </Menu>
                </Container>
            </Nav>
        </>
    )
}
