import React, { useEffect, useState } from 'react';
import { MobileIcon, Nav, NavbarContainer, NavImg, NavItem, NavLinks, NavLogo, NavMenu } from './Style';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                        <NavImg />
                        Privacy & Terms
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}    
                    </MobileIcon>   
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/' onClick={closeMobileMenu}>Overview</NavLinks>
                        </NavItem>    
                        <NavItem>
                            <NavLinks to='/services' onClick={closeMobileMenu}>Privacy Policy</NavLinks>
                        </NavItem>    
                        <NavItem>
                            <NavLinks to='/products' onClick={closeMobileMenu}>Terms of Service</NavLinks>
                        </NavItem>  
                        <NavItem>
                            <NavLinks to='/products' onClick={closeMobileMenu}>FAQ</NavLinks>
                        </NavItem>                            
                        </NavMenu> 
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};
export default Navbar;
