const listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
  ];

const nomes = document.getElementById('convidados');
listaConvidados.forEach((pessoa) =>{
console.log(`${pessoa.nome} ${pessoa.sobrenome}`);
})

listaConvidados.forEach((pessoa)=> {
const item = document.createElement('li')
item.textContent = `${pessoa.nome} ${pessoa.sobrenome}`
nomes.appendChild(item)
})