import {pool} from "./config.js"

export async function buscarLivrosPorId(livrosId) {
    const [rows]= await pool.query ("SELECT * FROM livros WHERE id=?",
        [livrosId]
    )
    return rows [0]
    
}