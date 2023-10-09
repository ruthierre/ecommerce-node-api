import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { CategoriaPrismaRepository } from "@modules/catalogo/infra/database/categoria.prisma.repository";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exception";

const prisma = new PrismaClient({
    log:['query', 'info'],
    errorFormat: 'pretty'
});

async function main() {

    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado!');
        }
    );

    const categoriaRepo = new CategoriaPrismaRepository(prisma);

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

