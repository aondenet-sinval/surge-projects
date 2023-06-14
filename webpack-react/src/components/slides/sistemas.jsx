import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Image } from 'react-bootstrap';
import estoqueUpdate from './sistemas/atualizaEstoque.png'
import estoque from './sistemas/estoque.png'
import menu from './sistemas/menu.png'
import mobile from './sistemas/mobile.png'
import logoSig from './sistemas/logoaondenet.png'
function SigFree() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={estoqueUpdate}
          alt=""
        />
        <Carousel.Caption>
          <h3>Tela de atualização de produtos</h3>
          <p>Atualize preços e quantidade.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={estoque}
          alt=""
        />

        <Carousel.Caption>
          <h3>Registro de estoque</h3>
          <p>Cadastro simples de produtos no estoque.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={menu}
          alt=""
        />
        <Carousel.Caption>
          <h3>Menu de navegação</h3>
          <p>
            Cupom, Estoque, Registros, Cancelamentos e Relatórios.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={mobile}
          alt=""
        />
        <Carousel.Caption>
          <h3>Mobile</h3>
          <p>
            Sistema que se adapta à tela de dispositivos móveis.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={logoSig}
          alt=""
        />
        <Carousel.Caption>
          <h3>Baixar Aondenet SIG Free</h3>
          <p>
            Link: <a href="https://aondenet-sig-free.vercel.app/">Aondenet SIG Free</a>.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SigFree;
