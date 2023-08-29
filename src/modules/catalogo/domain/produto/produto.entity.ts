import { Entity } from "../../../../shared/domain/entity";
import { Categoria } from "../categoria/categoria.entity";
import { IProduto, CriarProdutoProps } from "./produto.types";
import { 
    
    NomeProdutoNuloOuIndefinido,
    NomeProdutoTamanhoMaximoInvalido, 
    NomeProdutoTamanhoMinimoInvalido,
    DescricaoProdutoNuloOuIndefinido,
    DescricaoProdutoTamanhoMaximoInvalido,
    DescricaoProdutoTamanhoMinimoInvalido,
    ValorProdutoNegativoInvalido,
    ProdutoCategoriaTamanhoMaximoInvalido,
    ProdutoCategoriaTamanhoMinimoInvalido

} from "./produto.exception";
import { ProdutoMap } from "../../mappers/produto.map";

class Produto extends Entity<IProduto> implements IProduto{
    
    private _nome: string;
    private _descricao: string;
    private _valor: number;
    private _categoria: Categoria[]

    public get nome(): string {
        return this._nome;
    }
    private set nome(value: string) {

        if(value === null || value === undefined){
            throw new NomeProdutoNuloOuIndefinido();
        }

        if(value.trim().length < 5) {
            throw new NomeProdutoTamanhoMinimoInvalido();
        }

        if(value.trim().length > 50){
            throw new NomeProdutoTamanhoMaximoInvalido();
        }

        this._nome = value;
    }
    
    public get descricao(): string{
        return this._descricao;
    }

    private set descricao(value: string){

        if(value === null || value === undefined){
            throw new DescricaoProdutoNuloOuIndefinido();
        }

        if(value.trim().length < 10 ){
            throw new DescricaoProdutoTamanhoMinimoInvalido();
        }

        if(value.trim().length > 200){
            throw new DescricaoProdutoTamanhoMaximoInvalido();
        }

        this._descricao = value;
    }

    public get valor(): number {
        return this._valor;
    }

    private set valor( value: number) {

        if(value < 0) {
            throw new ValorProdutoNegativoInvalido();
        }

        this._valor = value;
    }

    public get categoria(): Categoria[] {
        return this._categoria;
    }
    
    private set categoria(value: Categoria[]){
        
        if(value.length === 0){
            throw new ProdutoCategoriaTamanhoMinimoInvalido();
        }

        if(value.length > 2){
            throw new ProdutoCategoriaTamanhoMaximoInvalido();
        }

        this._categoria = value;
    }

    private constructor(produto: IProduto){
        super(produto.id);
        this.nome = produto.nome;
        this.descricao = produto.descricao;
        this.valor = produto.valor;
        this.categoria = produto.categoria;
    }

    public static criar(props: CriarProdutoProps): Produto {
        let { nome } = props;
        let { descricao } = props;
        let { valor } = props;
        let { categoria } = props;

        return new Produto ({ nome, descricao, valor, categoria});
    }

    public toDTO(): IProduto{
        return ProdutoMap.toDTO(this);
    }
}

export { Produto }