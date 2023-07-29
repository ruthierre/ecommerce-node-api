import { Categoria } from "./categoria.entity";

interface IProduto {
    id?: string
    nome: string,
    descricao: string,
    valor: number,
    categoria: Categoria[]
}

type CriarProdutoProps = Omit <IProduto, "id">;

export { IProduto, CriarProdutoProps }