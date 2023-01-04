import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import logo from '../../assets/dark_logo.jpg'

const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.ternary};
  text-decoration: none;
  
  font-size: 24px;
  
  
`

const CardLogo = styled.img`
    height: 68px;
    /* padding-right: 60px; */
`
const HeaderWrapper = styled.nav`
  padding-top: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: ${colors.secondary};
  padding-left: 30px;
  padding-right: 30px;
  /* width: 100%; */
`
function Header() {
    
    return (
        <HeaderWrapper>
        
            <Link to={"/"}>
                <CardLogo src={logo} alt="dark_logo"/>
            </Link>
            
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/profil">Profil</StyledLink>
            <StyledLink to="/settings">Réglage</StyledLink>
            <StyledLink to="/community">Communauté</StyledLink>
        
        </HeaderWrapper>
    )
}

export default Header
