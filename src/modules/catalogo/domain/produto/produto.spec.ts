import { faker } from '@faker-js/faker';
import { beforeAll, describe, expect, test } from "vitest";
import { Categoria } from "../categoria/categoria.entity";
import { Produto } from "./produto.entity";
import { DescricaoProdutoTamanhoMaximoInvalido, DescricaoProdutoTamanhoMinimoInvalido, NomeProdutoTamanhoMaximoInvalido, NomeProdutoTamanhoMinimoInvalido, ProdutoCategoriaTamanhoMaximoInvalido, ProdutoCategoriaTamanhoMinimoInvalido, ValorProdutoNegativoInvalido } from "./produto.exception";
import { CriarProdutoProps } from './produto.types';

let nomeProdutoValido: string;
let nomeProdutoTamanhoMinInvalido: string;
let nomeProdutoTamanhoMaxInvalido: string;
let descricaoProdutoValido: string;
let descricaoProdutoTamanhoMinInvalido: string;
let descricaoProdutoTamanhoMaxInvalido: string;
let valorProdutoValido: number;
let valorMinProdutoInvalido: number;
let categoriasValidas: Array<Categoria>;
let categoriasQtdMinInvalidas: Array<Categoria>;
let categoriasQtdMaxInvalidas: Array<Categoria>;

//Chamado uma vez antes de iniciar a execução de todos os testes no contexto atual.
beforeAll(async () => {

    //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio para o nome do produto
	nomeProdutoValido = faker.string.alpha({length:{min:5,max:50}});
	nomeProdutoTamanhoMinInvalido = faker.string.alpha({length:{min:0,max:4}});
	nomeProdutoTamanhoMaxInvalido = faker.string.alpha({length:{min:51,max:51}});

    //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio para a descrição do produto
	descricaoProdutoValido = faker.string.alpha({length:{min:10,max:200}});
	descricaoProdutoTamanhoMinInvalido = faker.string.alpha({length:{min:0,max:9}});
	descricaoProdutoTamanhoMaxInvalido = faker.string.alpha({length:{min:201,max:201}});

    //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio para o valor do produto
	valorProdutoValido = faker.number.int({min:1,max:2000 });
	valorMinProdutoInvalido = faker.number.int({min:-10,max: 0});

    //Preencendo um array de categorias válido com dados simulados
    const categoriaValida01 = Categoria.criar({nome:faker.string.alpha({length:{min:3,max:50}})});
    const categoriaValida02 = Categoria.criar({nome:faker.string.alpha({length:{min:3,max:50}})});
    const categoriaValida03 = Categoria.criar({nome:faker.string.alpha({length:{min:3,max:50}})});
    const categoriaValida04 = Categoria.criar({nome:faker.string.alpha({length:{min:3,max:50}})});
    categoriasValidas = faker.helpers.arrayElements<Categoria>([categoriaValida01,categoriaValida02,categoriaValida03], {min:1,max:3});
    categoriasQtdMinInvalidas = [];
    categoriasQtdMaxInvalidas = faker.helpers.arrayElements<Categoria>([categoriaValida01,categoriaValida02,categoriaValida03,categoriaValida04], { min: 4, max: 4});

});
describe('Entidade de Dominio: criar Produto', () => {

    test('deverá criar um produto válido', async () =>{

        
        
        const produtoValido: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categoria: categoriasValidas
        }
        expect( Produto.criar(produtoValido))
            .to.be.instanceOf(Produto);
    })

    test('Não deverá criar um produto com nome inválido - tamanho mínimo', async () =>{

               
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoTamanhoMinInvalido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categoria: categoriasValidas
        }
        expect( () => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMinimoInvalido);
    })

    test('Não deverá criar um produto com nome inválido - tamanho máximo', async () =>{
        
       
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoTamanhoMaxInvalido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categoria: categoriasValidas
        }
        expect( () => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMaximoInvalido);
    })

    test('Não deverá criar um produto com descrição inválida - tamanho mínimo', async () =>{

        
        
        const produtoDescricaoInvalida: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoTamanhoMinInvalido,
            valor: valorProdutoValido,
            categoria: categoriasValidas
        }
        expect( () => Produto.criar(produtoDescricaoInvalida))
            .toThrowError(DescricaoProdutoTamanhoMinimoInvalido);
    })

    test('Não deverá criar um produto com descrição inválida - tamanho máximo', async () =>{

                
        const produtoDescricaoInvalida: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoTamanhoMaxInvalido,
            valor: valorProdutoValido,
            categoria: categoriasValidas
        }
        expect( () => Produto.criar(produtoDescricaoInvalida))
            .toThrowError(DescricaoProdutoTamanhoMaximoInvalido);
    })

    test('Não deverá criar um produto com valor inválido - valor negativo', async () =>{

                
        const produtoValorInvalido: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorMinProdutoInvalido,
            categoria: categoriasValidas
        }
        expect( () => Produto.criar(produtoValorInvalido))
            .toThrowError(ValorProdutoNegativoInvalido);
    })

    test('Não deverá criar um produto com categoria inválida - categoria vazia', async () =>{

        
        const produtoCategoriaInvalida: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categoria: categoriasQtdMinInvalidas
        }
        expect( () => Produto.criar(produtoCategoriaInvalida))
            .toThrowError(ProdutoCategoriaTamanhoMinimoInvalido);
    })

    test('Não deverá criar um produto com categoria inválida - Limite de 3 categorias excedido', async () =>{

       
        const produtoCategoriaInvalida: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categoria: categoriasQtdMaxInvalidas
        }
        expect( () => Produto.criar(produtoCategoriaInvalida))
            .toThrowError(ProdutoCategoriaTamanhoMaximoInvalido);
    })
})