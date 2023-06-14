import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Image } from 'react-bootstrap';
import '../App.css'
import logoSig from './slides/sistemas/mold.png'
const Sidebar = () =>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return(<div className="text-carousel">
    <Carousel activeIndex={index} onSelect={handleSelect} variant="white">
      <Carousel.Item>
        <Image
          className="d-block w-100 h-100"
          src={logoSig}
          alt=""
        />
        <Carousel.Caption>
        <h3>Trabalhos</h3>
          <p><a href="https://pizzaria-react-pearl.vercel.app/">React</a>, Next, Wordpress</p>
          <p>LibreOffice Basic</p>
          <p>Blogger, Google Sheets</p>
          <p>
            Tempates Blogger:<br />
            <a href="http://pradosulba.blogspot.com/">Site </a>-
            <a href="https://sofemea.blogspot.com/"> Loja Blogger </a>-
            <a href="https://aondenet-landing-page.blogspot.com"> Hotel Blogger</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 h-100"
          src={logoSig}
          alt=""
        />
        <Carousel.Caption>
          <h2>Cursos</h2>
            <p>React, Node JS</p>
            <p>CSS, HTML, Javascript</p>
            <p>Excel</p>
            <p>PHP, C#, POO</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>)
}

export default Sidebar
