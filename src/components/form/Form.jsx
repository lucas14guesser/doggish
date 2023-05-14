import { useState } from "react"

import axios from "axios"

import './Form.css'

const Form = () => {

    const [form, setForm] = useState({
        nome: '', 
        email: '', 
        celular: '', 
        endereco: '', 
        dataNascimento: '', 
        explicacao: '',
    })

const handleChange = (e) => {
    const {name, value} = e.target
    setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
    }))
}

const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)
    const formData = Object.fromEntries(data.entries())
    

    axios.post('http://localhost:5600/adotados', formData, selectedOption)
        .then(resp => {
            console.log(resp.data)
            form.reset()
            window.location.replace('/success')

        })
        .catch(err => {
            console.log(err)
        })

}


  return (
    <form onSubmit={handleSubmit} className="form_container">
        <label htmlFor="nome">Nome Completo</label>
        <input
            type="text"
            name="nome"
            placeholder="Seu nome completo"
            value={form.nome}
            onChange={handleChange}
        />
        <label htmlFor="email">E-mail</label>
        <input
            type="text"
            name="email"
            placeholder="seu endereço de e-mail"
            value={form.email}
            onChange={handleChange}
        />
        <label htmlFor="celular">Nº de Celular</label>
        <input 
            type="number"
            name="celular"
            placeholder="Número de celular"
            value={form.celular}
            onChange={handleChange}
        />
        <label htmlFor="endereco">Endereço</label>
        <input
            type="text"
            name="endereco"
            placeholder="Rua..."
            value={form.endereco}
            onChange={handleChange}
        />
        <label htmlFor="nome">Data de Nascimento</label>
        <input
            type="date"
            name="dataNascimento"
            value={form.dataNascimento}
            onChange={handleChange}
        />
        <label htmlFor="explicacao">Por que você quer adotar um cãozinho?</label>
        <textarea
            type='text'
            name="explicacao"
            value={form.explicacao}
            onChange={handleChange}
        />


        <button type="submit">Enviar</button>
    </form>
  )
}

export default Form