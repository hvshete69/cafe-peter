import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaMugHot } from 'react-icons/fa'; 

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

    export const NavLink = styled(Link)`
        color:#fff;
        font-family: 'Roboto Condensed';
        font-size: 2rem;
        display: flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        
        @media screen and (max-width: 400px) {
            position: absolute;
            top: 22px;
            left: 15px;
        }
    `;

    export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-150%, 150%);
        font-family: 'Roboto Condensed';
        font-weight: bold;
        font-size: 20px;
        @media screen and (max-width: 400px) {
            position: absolute;
            top: -3px;
            left: 15px;
        }
    }
    `

    export const Bars = styled(FaMugHot)`
        font-size: 2rem;
        transform: tranform(-50%, -15%);
        @media screen and (max-width: 400px) {
            position: relative;
            top: 20px;
        }
        `;