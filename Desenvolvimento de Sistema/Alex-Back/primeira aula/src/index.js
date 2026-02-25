import { buscarLivroPorId, livrosMaiorSaidaNoPeriodo, listaDoEstoque} from "./bibliotecaService.js";
import { pool } from "./config.js";

async function main() {
    //busca por id
    console.log(await buscarLivroPorId(1))
    //Oq mais saiu 
    const dataInicial = "2026-01-01 00:00:00";
    const dataFinal = "2026-12-31 23:59:59";
    console.log(await livrosMaiorSaidaNoPeriodo(dataInicial, dataFinal))

    // lista do estoque
    console.log(await listaDoEstoque())
}

main().catch(error =>
    console.error(error)
).finally(async () => {
    await pool.end();
})