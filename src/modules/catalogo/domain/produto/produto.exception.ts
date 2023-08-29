import { DomainException } from "../../../../shared/domain/domain.exception";

class ProdutoException extends DomainException{
    constructor(message: string = '⚠️ Exceção de Domínio Genérica da Entidade Produto'){
        super(message);
        this.name = 'ProdutoException'
        this.message = message
    }
}

class NomeProdutoNuloOuIndefinido extends ProdutoException {
    public constructor(message:string = '⚠️ O nome da categoria é nulo ou indefinido.') {
        super(message);
        this.name = 'NomeProdutoNuloOuIndefinido'
        this.message = message;
    }
}

class NomeProdutoTamanhoMinimoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O nome do produto não possui um tamanho mínimo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class NomeProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O nome do produto não possui um tamanho máximo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoNuloOuIndefinido extends ProdutoException {
    public constructor(message:string = '⚠️ Descrição é nulo ou indefinido.') {
        super(message);
        this.name = 'DescricaoProdutoNuloOuIndefinido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMinimoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️  Descrição não possui um tamanho mínimo válido.') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ descrição não possui um tamanho máximo válido.') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class ValorProdutoNegativoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O valor do produto é inválido.') {
        super(message);
        this.name = 'ValorProdutoNegativoInvalido'
        this.message = message;
    }
}

class ProdutoCategoriaTamanhoMinimoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ a categoria do produto não pode está vazia.') {
        super(message);
        this.name = 'ProdutoCategoriaTamanhoMinimoInvalido'
        this.message = message;
    }
}

class ProdutoCategoriaTamanhoMaximoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ a categoria do produto ultrapassa o limite máximo.') {
        super(message);
        this.name = 'ProdutoCategoriaTamanhoMaximoInvalido'
        this.message = message;
    }
}

export { 
    ProdutoException,
    NomeProdutoNuloOuIndefinido,
    NomeProdutoTamanhoMinimoInvalido,
    NomeProdutoTamanhoMaximoInvalido,
    DescricaoProdutoNuloOuIndefinido,
    DescricaoProdutoTamanhoMaximoInvalido,
    DescricaoProdutoTamanhoMinimoInvalido,
    ValorProdutoNegativoInvalido,
    ProdutoCategoriaTamanhoMaximoInvalido,
    ProdutoCategoriaTamanhoMinimoInvalido
}