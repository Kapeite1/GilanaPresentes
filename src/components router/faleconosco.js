import React, { useState, setState } from 'react';
import Header from "../components/header";
import Navigator from  "../components/nav"
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import { Form, Button, Alert } from 'react-bootstrap'
import './faleconosco.scss'
import SelectInput from '@material-ui/core/Select/SelectInput';


function popupmsg() {
    document.getElementById("teste3").style.display = "block";
  }

function scrollToTop ()  {
    window.scrollTo(0, 0)
  }

function Contato () {
    
    //inicio para envio de email
    const [state, setState] = useState({ //as variaveis para utilizar no email
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: ""
      })

    function handleChange(e) {
    const value = e.target.value;
    setState({
        ...state,
        [e.target.name]: value
    });
    }

    
    function  handleSubmit (event) {
    const templateId = 'faleconosco';
        //setando as variaveis
    sendFeedback(templateId, {telefone: state.telefone, nome: state.nome, email: state.email, mensagem: state.mensagem, assunto: state.assunto })
    }

    function sendFeedback (templateId, variables) {
    window.emailjs.send(
        'gmail', templateId,
        variables
        ).then(res => {
        alert('E-mail enviado! Obrigado por fazer parte da Gilana Presentes!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    //fim envio de email
    
      
    return (
        <div className='component-contato'>
            {scrollToTop()}
            <div className='formulario'>
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label for='nome'>Nome Completo:</Form.Label>
                    <Form.Control type='text' name='nome' onChange={handleChange}/>
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control type='text' name='email' onChange={handleChange}/>
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control type='text' name='telefone' onChange={handleChange}/>
                    <Form.Label>Assunto:</Form.Label>
                        <Form.Control as="select" name='assunto' onChange={handleChange}>
                            <option> </option>
                            <option>Informação/Dúvida</option>
                            <option>Reclamação</option>
                            <option>Elogio</option>
                            <option>Sugestão</option>
                            <option>Orçamento</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mensagem:</Form.Label>
                    <Form.Control as="textarea" rows="3" name='mensagem' onChange={handleChange} />
                </Form.Group>
                <div id='teste3'>
                    <p>Teste3</p>    
                </div>
                <Button variant="primary" type="submit" onClick='popupmsg()' >
                    Enviar
                </Button>
                </Form>
            </div>
        </div>
    )
}


function FaleConosco() {
    
    return (
        <div>
            <Header />
            <Navigator />
            <Contato />
            <Footer />
            <Copyright />
        </div>
    )
}

export default FaleConosco;