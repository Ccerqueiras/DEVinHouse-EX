import { Pedido } from "./src/models/pedido.js"; 
import { Produto } from "./src/models/Produto.js";

const pro1 = new Produto("Mobi", 35_000, true, 1);
const pro2 = new Produto("corsa", 25_000, true, 12);
const pro3 = new Produto("etios", 45_000, false, 0);
const pro4 = new Produto("fiesta", 37_000, true, 6);
const pro5 = new Produto("combi", 13_000, false, 0);

const ped1 = new Pedido("20220001", "Caio");
const ped2 = new Pedido("20220002", "Victor");
ped1.adicionarProduto(pro2);
ped1.adicionarProduto(pro1);
ped1.adicionarProduto(pro4);

ped2.adicionarProduto(pro1);
ped2.adicionarProduto(pro4);
