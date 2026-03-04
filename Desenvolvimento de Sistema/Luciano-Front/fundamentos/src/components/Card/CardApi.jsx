import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
const CardApi = () => {

    // const [contador,setContador] = useState(0)

    // const incrementarValor = () => {

    //     setContador(prev => prev +1)
    //     console.log("contador",contador)
    // }


    const [users,setUsers] = useState([])

    const [filtro,setFiltro] = useState("")
    
     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        
    }, [])


  return (
    <div>
        {/* <p>{contador}</p>
        <button onClick={incrementarValor}>add</button> */}

        <input  className={styles.input}
            type="text" 
            placeholder='Filtrar por nome...'
            value={filtro}
            onChange = {(e) =>setFiltro(e.target.value)}
        />
        <div className={styles.cardContainerApi}>
            {
                users.map((user) =>(
                    <div className= {styles.card} key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.address.street}</p>
                        <p>latitude: {user.address.geo.lat}</p>
                        <p>longitude: {user.address.geo.lng}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default CardApi
