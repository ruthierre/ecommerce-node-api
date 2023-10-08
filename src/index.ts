import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exception";

const prisma = new PrismaClient();

async function main() {

    ///////////////////////
    ////criar categoria////
    ///////////////////////

   /* let categoria: Categoria;
    categoria = Categoria.criar({nome:'mesa'})

    /////////////////////////////////
    ///persistir Categoria no Banco//
    /////////////////////////////////

    await prisma.categoria.create({
        data: {
            id: categoria.id,
            nome: categoria.nome
        }
    }); */


    /////////////////////////////////
    // atualizar categoria no Banco//
    /////////////////////////////////

    const categoriaAtualizada = await prisma.categoria.update({
        where: {id:"1697d7a9-54c8-475a-81c2-d98733d733b7"},
        data: {nome: 'Banho'},
    })




    //////////////////////
    //listar categoria////
    /////////////////////
    const listarCategoria = await prisma.categoria.findMany();
    console.log(listarCategoria);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        if (error instanceof DomainException){
            console.log("exceção de Dominio");
            console.log(error.message);
        }
        else{
            console.log("Outras Exceções");
            console.log(error.message);
        }
        await prisma.$disconnect()
        process.exit(1)
    })

