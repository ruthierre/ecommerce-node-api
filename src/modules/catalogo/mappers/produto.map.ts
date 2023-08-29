import { Produto } from "../domain/produto/produto.entity";
import { IProduto } from "../domain/produto.types";

class ProdutoMap {

    public static toDTO(produto: Produto): IProduto{
        return{
            id: produto.id,
            nome : produto.nome,
            descricao: produto.descricao,
            valor: produto.valor,
            categoria: produto.categoria
        }
    }
}

export { ProdutoMap }