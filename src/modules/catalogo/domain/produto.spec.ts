import { CriarProdutoProps } from "./produto.types";
import { Categoria } from "./categoria.entity";
import { expect, test, describe} from "vitest";
import { Produto } from "./produto.entity";
import { DescricaoProdutoTamanhoMaximoInvalido, DescricaoProdutoTamanhoMinimoInvalido, NomeProdutoTamanhoMaximoInvalido, NomeProdutoTamanhoMinimoInvalido, ProdutoCategoriaTamanhoMaximoInvalido, ProdutoCategoriaTamanhoMinimoInvalido, ValorProdutoNegativoInvalido } from "./produto.exception";

describe('Entidade de Dominio: criar Produto', () => {

    test('deverá criar um produto válido', async () =>{

        
        const categoria = Categoria.criar({nome:'coisas de casa'})
        const produtoValido: CriarProdutoProps = {
            nome: 'agulha',
            descricao: 'usado para costurar coisas',
            valor: 1,
            categoria: [categoria]
        }
        expect( Produto.criar(produtoValido))
            .to.be.instanceOf(Produto);
    })

    test('Não deverá criar um produto com nome inválido - tamanho mínimo', async () =>{

        
        const categoria = Categoria.criar({nome:'coisas de casa'})
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: 'agu',
            descricao: 'usado para costurar coisas',
            valor: 2,
            categoria: [categoria]
        }
        expect( () => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMinimoInvalido);
    })

    test('Não deverá criar um produto com nome inválido - tamanho máximo', async () =>{

        
        const categoria = Categoria.criar({nome:'coisas de casa'})
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: 'aguaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            descricao: 'usado para costurar coisas',
            valor: 3,
            categoria: [categoria]
        }
        expect( () => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMaximoInvalido);
    })

    test('Não deverá criar um produto com descrição inválida - tamanho mínimo', async () =>{

        
        const categoria = Categoria.criar({nome:'coisas de casa'})
        const produtoDescricaoInvalida: CriarProdutoProps = {
            nome: 'agulha',
            descricao: 'usad',
            valor: 2,
            categoria: [categoria]
        }
        expect( () => Produto.criar(produtoDescricaoInvalida))
            .toThrowError(DescricaoProdutoTamanhoMinimoInvalido);
    })

    test('Não deverá criar um produto com descrição inválida - tamanho máximo', async () =>{

        
        const categoria = Categoria.criar({nome:'coisas de casa'})
        const produtoDescricaoInvalida: CriarProdutoProps = {
            nome: 'agulha',
            descricao: 'usadzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
            valor: 2,
            categoria: [categoria]
        }
        expect( () => Produto.criar(produtoDescricaoInvalida))
            .toThrowError(DescricaoProdutoTamanhoMaximoInvalido);
    })

    test('Não deverá criar um produto com valor inválido - valor negativo', async () =>{

        
        const categoria = Categoria.criar({nome:'coisas de casa'})
        const produtoValorInvalido: CriarProdutoProps = {
            nome: 'agulha',
            descricao: 'usado para costurar',
            valor: -15,
            categoria: [categoria]
        }
        expect( () => Produto.criar(produtoValorInvalido))
            .toThrowError(ValorProdutoNegativoInvalido);
    })

    test('Não deverá criar um produto com categoria inválida - categoria vazia', async () =>{

        
        const produtoCategoriaInvalida: CriarProdutoProps = {
            nome: 'agulha',
            descricao: 'usado para costurar',
            valor: 2,
            categoria: []
        }
        expect( () => Produto.criar(produtoCategoriaInvalida))
            .toThrowError(ProdutoCategoriaTamanhoMinimoInvalido);
    })

    test('Não deverá criar um produto com categoria inválida - Limite de 3 categorias excedido', async () =>{

        
        const categoria1 = Categoria.criar({nome:'coisas de casa'})
        const categoria2 = Categoria.criar({nome:'coisas de fazer'})
        const categoria3 = Categoria.criar({nome:'coisas de mulher'})
        const categoria4 = Categoria.criar({nome:'coisas de homem'})

        const produtoCategoriaInvalida: CriarProdutoProps = {
            nome: 'agulha',
            descricao: 'usado para costurar',
            valor: 2,
            categoria: [categoria1, categoria2, categoria3, categoria4]
        }
        expect( () => Produto.criar(produtoCategoriaInvalida))
            .toThrowError(ProdutoCategoriaTamanhoMaximoInvalido);
    })
})