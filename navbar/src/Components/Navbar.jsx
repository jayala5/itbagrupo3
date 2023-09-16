import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import "../Styles/main.css";
import logo from "../Components/techbank.png" 

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3><img src={logo} alt="Techbank logo" /></h3>
            <nav ref={navRef}>
                <a href="#">Inicio</a>
                <a href="#">Cuentas</a>
                <a href="#">Transferencias</a>
                <a href="#">Pagos</a>
                <a href="#">Conversor de Divisas</a>
                <a href="#">Inversiones</a>
                <a href="#">Seguros</a>
                <a href="#">Promociones</a>
                <a href="#">Atención al Cliente </a>
                <a href="#">Sucursales</a>
                <a href="#">Calculadora</a>
                <a href="#">Iniciar Sesion</a>
                <button className="nav-btn nav-close-btn"onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    
    );
}

export default Navbar



























// import React, { useState } from 'react'
// import styled from 'styled-components'
// import BurguerButton from './BurguerButton'

// import React from 'react'





// function Navbar() {

//     const [clicked, setClicked] = useState(false)
//     const handleClick = () => {
//         //cuando esta true lo pasa a false y vice versa
//         setClicked(!clicked)
//     }
//     return (
//         <>
//             <NavContainer>
//                 <h2>Techbank <span>NAVBAR</span></h2>
//                 <div className={`links ${clicked ? 'active' : ''}`}>
//                     <a onClick={handleClick} href="#h">Inicio</a>
//                     <a onClick={handleClick} href="#h">Cuentas</a>
//                     <a onClick={handleClick} href="#h">Transferencias</a>
//                     <a onClick={handleClick} href="#h">Pagos</a>
//                     <a onClick={handleClick} href="#h">Conversor de Divisas</a>
//                     <a onClick={handleClick} href="#h">Préstamos</a>
//                     <a onClick={handleClick} href="#h">Inversiones</a>
//                     <a onClick={handleClick} href="#h">Seguros</a>
//                     <a onClick={handleClick} href="#h">Promociones</a>
//                     <a onClick={handleClick} href="#h">Atencion al Cliente</a>
//                     <a onClick={handleClick} href="#h">Sucursales</a>
//                     <a onClick={handleClick} href="#h">Educación Financiera</a>
//                     <a onClick={handleClick} href="#h">Calculadora</a>
//                     <a onClick={handleClick} href="#h">Noticias Financieras</a>
//                     <a onClick={handleClick} href="#h">Acerca de Nosotros</a>
//                     <a onClick={handleClick} href="#h">Iniciar Sesion</a>

//                 </div>
//                 <div className='burguer'>
//                     <BurguerButton clicked={clicked} handleClick={handleClick} />
//                 </div>
//                 <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
//             </NavContainer>
//         </>
//     )
// }

// export default Navbar

// const NavContainer = styled.nav`
//   h2{
//     color: white;
//     font-weight: 400;
//     span{
//       font-weight: bold;
//     }
//   }
//   padding: .4rem;
//   background-color: #333;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   a{
//     color: white;
//     text-decoration: none;
//     margin-right: 1rem;
//   }
//   .links{
//     position: absolute;
//     top: -700px;
//     left: -2000px;
//     right: 0;
//     margin-left: auto;
//     margin-right: auto;
//     text-align: center;
//     transition: all .5s ease;
//     a{
//       color: white;
//       font-size: 2rem;
//       display: block;
//     }
//     @media(min-width: 768px){
//       position: initial;
//       margin: 0;
//       a{
//         font-size: 1rem;
//         color: white;
//         display: inline;
//       }
//       display: block;
//     }
//   }
//   .links.active{
//     width: 100%;
//     display: block;
//     position: absolute;
//     margin-left: auto;
//     margin-right: auto;
//     top: 30%;
//     left: 0;
//     right: 0;
//     text-align: center;
//     a{
//       font-size: 2rem;
//       margin-top: 1rem;
//       color: white;
//     }
//   }
//   .burguer{
//     @media(min-width: 768px){
//       display: none;
//     }
//   }
// `

// const BgDiv = styled.div`
//   background-color: #222;
//   position: absolute;
//   top: -1000px;
//   left: -1000px;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   transition: all .6s ease ;
  
//   &.active{
//     border-radius: 0 0 80% 0;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
// `