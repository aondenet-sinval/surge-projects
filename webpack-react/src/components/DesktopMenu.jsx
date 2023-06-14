import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logoaondenet.png'

export default function DesktopMenu() {
  const [active, setActive] = useState(0)
  useEffect(()=>{
    const inicio = document.getElementById('inicio')
    inicio.onclick = ()=>{ setActive(1)}
    const home = document.getElementById('home')
    home.onclick = ()=>{ setActive(2)}
    const sobre = document.getElementById('sobre')
    sobre.onclick = ()=>{ setActive(3)}
    const contato = document.getElementById('contato')
    contato.onclick = ()=>{ setActive(4)}
  })
  return (
    <Navbar className="menu-bar" expand="lg" fixed="top" aria-label="Menu de navegação">
      <Navbar.Brand as={Link} to="/" aria-label="Página inicial"
        id="inicio" active={ active === 1 ? 'active' : ''}>
        <Image src={logo} alt="Logo Aondenet" width={40} height={40} />
      </Navbar.Brand>
      <Nav className="flex-row justify-content-end">
        <Nav.Link as={Link} to="/home" aria-label="Página inicial"
          style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'white' }}
          id="home" active={ active === 2 ? 'active' : ''}>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about" aria-label="Página Sobre"
          style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'white' }}
          id="sobre" active={ active === 3 ? 'active' : ''}>
          Sobre
        </Nav.Link>
        <Nav.Link as={Link} to="/contato" aria-label="Página Contato"
          style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'white' }}
          id="contato" active={ active === 4 ? 'active' : ''}>
          Contato
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
