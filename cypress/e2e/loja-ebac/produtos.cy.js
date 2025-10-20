/// <reference types="cypress"/>
import produtosPage from '../../support/page-objects/produtos.page';


describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    produtosPage.visitarUrl()
    
});

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve adicionar um produto ao carrinho', () => {
        produtosPage.buscarProduto('Stark Fundamental Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Black', 5)
        
        
    });

     it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
            
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)

            cy.get('.woocommerce-message').should('contain', 'adicionados no seu carrinho')
        

        })

        
    });
}); 