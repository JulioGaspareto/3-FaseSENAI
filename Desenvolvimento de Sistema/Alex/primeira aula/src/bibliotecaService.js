import { pool } from "./config.js"

export async function buscarLivroPorId(produtosId) {
    const [rows] = await pool.query("SELECT * from produtos WHERE id=?",
        [produtosId]
    )
    return rows[0]
}

export async function livrosMaiorSaidaNoPeriodo(dataInicial, dataFinal) {
    const [rows] = await pool.query(`SELECT p.id AS produtos_id, 
        p.titulo AS produtos, 
        p.valor_unitario, 
        m.quantidade_total_saida 
        FROM produtos p 
        LEFT JOIN 
        ( SELECT produtos_id, SUM(quantidade) AS quantidade_total_saida 
         FROM movimentacoes 
         WHERE tipo = 'SAIDA' 
         AND data_movimentacao 
         BETWEEN ? AND ? 
         GROUP BY produtos_id ) m ON m.produtos_id = p.id 
         ORDER BY m.quantidade_total_saida DESC`,
        [dataInicial, dataFinal]);
    return rows.map((item) => {
        const quantidade = item.quantidade_total_saida; 
        const valorUnitario = item.valor_unitario;
        return { 
            produtos: item.produtos, 
            quantidade_total_saida: quantidade, 
            valor_total_financeiro_saidas: quantidade * valorUnitario 
        };
        
    });

} 


export async function listaDoEstoque(listaTotal){
 const [rows] = await pool.query("SELECT * FROM vw_estoque",
        [listaTotal]
    )
    return rows

}
