import React from 'react'
import styles from './Body.module.css'
import Card from '../../components/Card/Card'
const Body = () => {
    
    //arrai nome diferentes

    const usuarios = [
        {nome:"paulo" , idade: 22, cidade:"Rodrigarao"},
        {nome:"vitor" , idade: 39, cidade:"vitoriani"},
        {nome:"jao" , idade: 17, cidade:"telambucano"}
    ]
  return (
    <>

    <main>
        <div className={styles.body}>
            {usuarios.map((usuario, index) => (
                <Card 
                key={index}
                nome={usuario.nome}
                idade={usuario.idade}
                cidade={usuario.cidade}
                />
            ))}
            </div>
    </main>

    </>
  )
}

export default Body