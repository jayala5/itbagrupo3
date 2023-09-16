import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import "../Styles/main.css";
import logo from "../Components/techbank.png" 
import styled from 'styled-components'
import Items from "./Items";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

//VER ROUTER 
const NavContainer = styled.nav`

	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "Titillium Web", sans-serif;
    h3 img {
    max-width: 500px; 
    max-height: 100px;  
}

 a {
	margin: 0 1rem;
	color: #eee;
	text-decoration: none;
}
:hover {
	color: #db2b39;
}

`
const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	padding: 0 2rem;
	background-color: #111f54;
	color: #eee;
    // Ver este NAV.BTN , para mi va en NavContainer . 
    .nav-btn {
	padding: 5px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: #eee;
	visibility: hidden;
	opacity: 0;
	font-size: 1.8rem;
}
    .div,
    nav {
        display: flex;
        align-items: center;
    }
    //Ver mediaq , no funciona HAMB menu.  
    @media only screen and (max-width: 1024px) {
	header .nav-btn {
		visibility: visible;
		opacity: 1;
	}

	header nav {
		position: fixed;
		top: -100vh;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background-color: var(--mainColor);
		transition: 1s;
	}

	header .responsive_nav {
		transform: translateY(100vh);
	}

	nav .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}

	nav a {
		font-size: 1.5rem;
	}
}

`

    return (
        
            <HeaderContainer>
                <h3><img src={logo} alt="Techbank logo" /></h3>
                <NavContainer ref={navRef}>
                    <Items/>
                    <button className="nav-btn nav-close-btn"onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </NavContainer>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </HeaderContainer>
 
    );
}

export default Navbar






