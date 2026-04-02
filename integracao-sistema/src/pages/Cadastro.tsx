import React, { useState } from 'react'


function Cadastro() {

    async function cadastrar() {

        

    }

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return (
        <>
            <div className='flex flex-col justify-center w-full'>
                <h1> Cadastro </h1>
                <div className='flex flex-col justify-center w-full'>
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <label htmlFor=""></label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor=""></label>
                    <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <button onClick={cadastrar}> cadastrar</button>
            </div >

        </>
    )
}

export default Cadastro