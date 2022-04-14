import React, {useState, useEffect} from 'react'
import { Nav, Container, LogoContainer, MobileMenuIcon, Menu } from "../styles/StyledNavbar";

export const Navbar = (props) => {

    const [showMobileMenu, setMobileMenu] = useState(false);
    const MenuRef = React.createRef();

    useEffect(() => {
        // Make current link active (depends of props.active index)
        if(props.active > -1){
            MenuRef.current.children[0].children[props.active].className = "active";
        }
    })

    const showMenu = () => {
        setMobileMenu(!showMobileMenu);
        if(showMobileMenu){
            MenuRef.current.style = "right: -50%;";
        }else{
            MenuRef.current.style = "right: 0px;";
        }
    }
    
    return (
        <>
            <Nav>
                <Container>
                    <LogoContainer>
                        <h2>CinéSar</h2>
                    </LogoContainer>
                    <MobileMenuIcon onClick={showMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </MobileMenuIcon>
                    <Menu ref={MenuRef} style={{right: "-50%"}}>
                        <ul>
                            <li>Accueil</li>
                            <li>Horaires</li>
                            <li>{"Films à l'affiche"}</li>
                            <li>Prochainement</li>
                            <li>Informations</li>
                            <li>Mon compte</li>
                        </ul>
                    </Menu>
                </Container>
            </Nav>
        </>
    )
}
