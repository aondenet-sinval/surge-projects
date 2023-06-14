import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded);
  const [active, setActive] = useState(0)
  useEffect(()=>{
    const inicio = document.getElementById('inicio')
    inicio.onclick = ()=>{ setActive(1); setExpanded(!expanded)}
    const home = document.getElementById('home')
    home.onclick = ()=>{ setActive(2); setExpanded(!expanded)}
    const sobre = document.getElementById('sobre')
    sobre.onclick = ()=>{ setActive(3); setExpanded(!expanded)}
    const contato = document.getElementById('contato')
    contato.onclick = ()=>{ setActive(4); setExpanded(!expanded)}
  })

  return (
    <Navbar bg="dark" expand="lg" fixed="top" aria-label="Menu de navegação">
      <Navbar.Toggle aria-label="Menu" onClick={handleToggle} />
      <Navbar.Collapse in={expanded}>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" aria-label="Página inicial"
          style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'white' }}
           id="inicio" active={ active === 1 ? 'active' : ''}>
            Início
          </Nav.Link>
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
      </Navbar.Collapse>
    </Navbar>
  );
}
