import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const SidebarLeft = () =>{
  return(<>
    <h2>Meu Portfólio</h2>
      <div>
        Designer WEB e Programador
      </div>
      <div>Prado-BA, Brasil</div>
      <hr />
      <section>
        <header>
          <h3><strong>Experiência</strong></h3>
        </header>
        <section>
          <header>
            <h4>Gimp: 1 ano.</h4>
          </header>
            <ProgressBar now={50} />
        </section>
        <hr />
        <section>
          <header>
            <h4>Inkscape: 4 meses.</h4>
          </header>
            <ProgressBar now={20} />
        </section>
        <hr />
        <section>
          <header>
            <h4>LibreOffice Basic: 1 ano.</h4>
          </header>
            <ProgressBar now={50} />
        </section>
        <hr />
        <section>
          <header>
            <h4>JavaScript: 2 anos.</h4>
          </header>
            <ProgressBar now={100} />
        </section>
        <hr />
        <section>
          <header>
            <h4>React: 1 ano.</h4>
          </header>
            <ProgressBar now={50} />
        </section>
      </section>
  </>)
}

export default SidebarLeft
