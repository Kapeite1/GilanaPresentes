import React, { useState }from 'react';
import Header from "../components/header";
import Navigator from  "../components/nav"
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import { Form, Button } from 'react-bootstrap'
import './trabalheconosco.scss'

function scrollToTop ()  {
    window.scrollTo(0, 0)
}

function Formulario () {

    //inicio para envio de email
    const [state, setState] = useState({ //as variaveis para utilizar no email
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        cidade: "",
        bairro: "",
        sexo: "",
        idade: "",
        estadocivil: "",
        escolaridade: "",
        arquivo: ""

      })



    function handleChange(e) {
    const value = e.target.value;
    setState({
        ...state,
        [e.target.name]: value
    });
    }

    
    function  handleSubmit (event) {
    const templateId = 'trabalheconosco';
        //setando as variaveis
    sendFeedback(templateId, {nome: state.nome, email: state.email, telefone: state.telefone, endereco: state.endereco, cidade: state.cidade, bairro: state.bairro, sexo: state.sexo, idade: state.idade, estadocivil: state.estadocivil, escolaridade: state.escolaridade, arquivo: state.arquivo})
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
        <div className='component-trabalheconosco'>
            {scrollToTop()}
            <h1>Trabalhe Conosco</h1>
            <div className='formulario'>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                    <Form.Group>
                        <Form.Label>Nome Completo:</Form.Label>
                        <Form.Control name='nome' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control name='email' onChange={handleChange}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control name='telefone' onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Endereço:</Form.Label>
                            <Form.Control name='endereco' onChange={handleChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Cidade:</Form.Label>
                            <Form.Control name='cidade' onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Bairro:</Form.Label>
                            <Form.Control name='bairro' onChange={handleChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Sexo:</Form.Label>
                            <Form.Control as="select" name='sexo' onChange={handleChange}>
                                <option> </option>
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Idade</Form.Label>
                            <Form.Control name='idade' onChange={handleChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Estado Civil:</Form.Label>
                            <Form.Control as="select" name='estadocivil' onChange={handleChange}>
                                <option> </option>
                                <option>Solteiro(a)</option>
                                <option>Casado(a)</option>
                                <option>Divorciado(a)</option>
                                <option>Viúvo(a)</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Escolaridade:</Form.Label>
                            <Form.Control as="select" name='escolaridade' onChange={handleChange}>
                                <option> </option>
                                <option>Educação infantil</option>
                                <option>Ensino fundamental</option>
                                <option>Ensino médio</option>
                                <option>Ensino superior</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <div className="mb-3">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Anexar arquivo</Form.File.Label>
                            <Form.File.Input name='arqivo' onChange={handleChange}/>
                        </Form.File>
                    </div>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
                <div className='informacao'>
                    <h1>A Melhor Papelaria em</h1><h1> Casimiro de Abreu!</h1>
                    <p>A <b>Gilana Presentes</b> acredita no trabalho em equipe, realizado por profissionais motivados e comprometidos com a qualidade.
                    Faça parte da nossa <b>família</b>.
                    </p>
                </div>
            </div>
        </div>
    )
}

function TrabalheConosco() {
    return (
        <div>
            <Header />
            <Navigator />
            <Formulario />
            <Footer />
            <Copyright />
        </div>
    )
}

export default TrabalheConosco;