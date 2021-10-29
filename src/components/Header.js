import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderStyle>
            <div className="logo">
                <img width="55px" height="60px"src="https://i.ibb.co/23QKDzX/Untitled-design-3.png"/>
                <p>Blogger Pro</p>
            </div>
            
            <MenuStyle>
                <li><Link to="/">Login</Link></li>
                <li><Link to="view">View</Link></li>
                <li><Link to="logout">Logout</Link></li>
            </MenuStyle>
        </HeaderStyle>
    );
}

export default Header;

const HeaderStyle = styled.div`
    padding: 0.2em 0.5em;
    background-color: #daa1ac;
    display:flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 2px 3px rgb(0 0 0 / 7);

    .logo {
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    p {
        font-weight: bold;
        font-size: 2em;
        padding: 0 0.3em;
    }
`

const MenuStyle = styled.ul`
  li {
        display: inline-block;
        padding: 0.3rem 1rem;
        
        a {
            text-decoration: none;
            color: rgb(50, 15, 15);
            font-size: 1.3em;
        }

        &.active {
            text-decoration: underline;
        }
        
        &:hover {
            font-weight: bold;
            color: black
        }
    }
`