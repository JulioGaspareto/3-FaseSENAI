import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
function Autor() {
  const [autores, setAutores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/autores")
            .then(res => res.json())
            .then(data => {
                setAutores(data)
            })
    }, [])
    return (
        <>
            <div className='flex gap-2'>
                {
                    autores.map(autor => (
                        <div key={autor.id} className='card'>
                            <img src={autor.image} alt={autor.title} />
                            <h2>{autor.title}</h2>
                            <h3>{autor.views}</h3>
                            <p>{autor.description}</p>
                            {/* <a href='#'>Leia Mais</a> */}
                            <Link to={`/autor/${autor.id}`} className='text-white bg-blue-500'>
                                Ver mais
                            </Link>
                        </div>
                    )
                    )
                }
            </div>
        </>

    )
}

export default Autor