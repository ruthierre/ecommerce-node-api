import { Entity } from "../../../shared/domain/entity";
import { Categoria } from "./categoria.entity";
import { IProduto } from "./produto.types";
import { 
    
    NomeProdutoNuloOuIndefinido,
    NomeProdutoTamanhoMaximoInvalido, 
    NomeProdutoTamanhoMinimoInvalido,
    DescricaoProdutoNuloOuIndefinido,
    DescricaoProdutoTamanhoMaximoInvalido,
    DescricaoProdutoTamanhoMinimoInvalido,
    ValorProdutoNegativoInvalido

} from "./produto.exception";

class Produto extends Entity<IProduto> implements IProduto{
    
    private _nome: string;
    private _descricao: string;
    private _valor: number;
    private _categoria: [Categoria]

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

    public get categoria(): [Categoria] {
        return this._categoria;
    }
    
    private set categoria(value: [Categoria]){
        

        this._categoria = value;
    }
}