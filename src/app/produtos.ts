export interface IProduto{
    id: number;
    descricao: string;
    preco: number;
    descricaoProduto: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoProduto: "A vista no PIX", imagem: "./assets/img/mouse-3.jpg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoProduto: "A vista no PIX", imagem: "./assets/img/monitor-1.jpg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Teclado Excelente", preco: 749.00, descricaoProduto: "A vista no PIX", imagem: "./assets/img/tecladp-1.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Fone para quem joga FPS", preco: 599.99, descricaoProduto: "A vista no PIX", imagem: "./assets/img/fone-de-ouvido-1.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoProduto: "A vista no PIX", imagem: "./assets/img/fone-de-ouvido-2.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Fone de ouvi bom", preco: 399.99, descricaoProduto: "A vista no PIX", imagem: "./assets/img/fone-de-ouvido-3.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoProduto: "A vista no PIX", imagem: "./assets/img/hd.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Combo de placa de video", preco: 1849.99, descricaoProduto: "A vista no PIX", imagem: "./assets/img/placa-video.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoProduto: "A vista no PIX", imagem: "./assets/img/processador.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Notbook bom", preco: 2500, descricaoProduto: "A vista no PIX", imagem: "./assets/img/laptop-1.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Notbook excelente", preco: 4500, descricaoProduto: "A vista no PIX", imagem: "./assets/img/laptop-1.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoProduto: "A vista no PIX", imagem: "./assets/img/mouse-1.png", quantidadeEstoque: 10 },
    { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoProduto: "A vista no PIX", imagem: "./assets/img/mouse-2.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Mouser pequeno", preco: 50, descricaoProduto: "A vista no PIX", imagem: "./assets/img/mouse-4.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoProduto: "A vista no PIX", imagem: "./assets/img/teclado-2.jpg", quantidadeEstoque: 10 },
]