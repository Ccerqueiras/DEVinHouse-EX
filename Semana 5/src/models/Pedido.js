import { Produto } from "./Produto.js";

export class Pedido {
  constructor(numeroPedido, nomeCliente) {
    this.numeroPedido = numeroPedido;
    this.nomeCliente = nomeCliente;
    this.estaPago = false;
    this.dataPedido = new Date().toLocaleDateString();
    this.listaProdutos = [];
  }

  adicionarProduto(produto) {
    const verificaProduto = produto instanceof Produto;
    if (verificaProduto) {
      this.listaProdutos.push(produto);
    }
  }
}
