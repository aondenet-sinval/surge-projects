import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Link, Image } from 'react-bootstrap';
import enviarContato from './libs/contato'
import image from './img/WhatsAppButtonWhiteMedium.png'

function FormContato() {
  const [contato, setContato ] = useState({ })
  const [url, setUrl ] = useState('')
  const changeContato = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setContato({
      ...contato,
      [name]: value
    })
  }
  const createContato = async ()=>{
    if (contato.name && contato.email && contato.telefone && contato.message) {
      const link = await enviarContato(contato)
      await setUrl(link)
    }
  }
  function teste(e){
    e.preventDefault()
    if (contato.name && contato.email && contato.telefone && contato.message) {
      window.open(url, '_blank')
    }
  }
  return (
    <>
    <h2>Contato</h2>
    <Form>
    <Form.Group className="mb-3">
      <Form.Label>Nome</Form.Label>
      <Form.Control type="text" placeholder="Digite seu nome"
        onChange={changeContato} name="name" />
      <Form.Text className="text-muted">
        Escreva seu primeiro nome.
      </Form.Text>
    </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email"
           onChange={changeContato} name="email" />
        <Form.Text className="text-muted">
          Escreva seu email.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="number" placeholder="Telefone"
         onChange={changeContato} name="telefone" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mensagem</Form.Label>
        <Form.Control type="text" placeholder="Digite a mensagem"
           onChange={changeContato} onBlur={createContato} name="message" />
        <Form.Text className="text-muted">
          Escreva sua mensagem.
        </Form.Text>
      </Form.Group>
        <a href={url} className="messageZap">
          <Image src={image} onClick={teste} />
        </a>
    </Form>
    </>
  );
}

export default FormContato;
