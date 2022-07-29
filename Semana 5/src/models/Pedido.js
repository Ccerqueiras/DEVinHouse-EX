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
    const verificaProduto = produto instanceof Produto; //verifica se produto é instacia de Produto
    if (verificaProduto) {
      this.listaProdutos.push(produto);
    }
  }
  
  calcularTotal(){
    let total = this.listaProdutos.reduce((velho, novo)=>{
        return velho + novo.preco * novo.quantidade;
    }, 0);
    return total;
  }
}
