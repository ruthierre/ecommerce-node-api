import { Categoria } from "./categoria.entity";

interface IProduto {
    id?: string
    nome: string,
    descricao: string,
    valor: number,
    categoria: [Categoria]
}

type criarProdutoProps = Omit <IProduto, "id">;

export { IProduto, criarProdutoProps }