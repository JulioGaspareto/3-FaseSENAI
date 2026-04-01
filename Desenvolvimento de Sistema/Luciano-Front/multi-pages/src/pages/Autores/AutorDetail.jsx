import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router'
const AutorDetail = () => {

    const { id } = useParams()
    const [autor, setAutor] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/autores/${id}`)
            .then(res => res.json())
            .then(data => setAutor(data))
    }, [id])

    if (!autor) return <div>carregando... </div>

    return (
        <div className='p-4'>
            <img src={autor.image} alt={autor.title}  className='w-150'/>
            <h1 className='text-x1 font-bold'>{autor.title}</h1>
            <h2>{autor.views}</h2>
            <p>{autor.description}</p>
        </div>
    )
}

export default AutorDetail