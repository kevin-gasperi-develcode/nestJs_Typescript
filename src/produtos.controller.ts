import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produto.model'
@Controller('produtos')

export class ProdutosController {
    produtos: Produto[] =[
        new Produto("LIV01", "Livro TD1", 29.90),
        new Produto("LIV02", "Livro TD2", 29.90),
        new Produto("LIV03", "Livro TD3", 29.90)
    ]

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtos[0];
    }

    @Post()
    criar(@Body() produto: Produto) {
        produto.id = 100;
        this.produtos.push(produto);
    }

    @Put()
    alterar(@Body() produto): string {
        console.log(produto);
        return 'Produto atualizado';
    }

    @Delete(':id')
    apagar(@Param() params): string {
        return 'Produto Apagado';
    }
}
