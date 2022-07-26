const convidado1 = {
  nome: "Caio",
  sobrenome: "Souza",
  setor: "camarote",
  idade: 26,
};

const convidado2 = {
  nome: "Victor",
  sobrenome: "Cerqueira",
  setor: "pista",
  idade: 23,
};

const convidado3 = {
  nome: "Nina",
  sobrenome: "Dogs",
  setor: "camarote",
  idade: "15",
};

const convidado4 = {
  nome: "bruna",
  sobrenome: "fini",
  setor: "pista",
  idade: 17,
};

const convidado5 = {
  nome: "Brenda",
  sobrenome: "Inda",
  setor: "pista",
  idade: 66,
};

var listaDeConvidados = [
  convidado1,
  convidado2,
  convidado3,
  convidado4,
  convidado5,
];

function liberarBebidas(lista) {
  const result = lista.map((convidado) => {
    convidado.openBar = false;
    if (convidado.idade >= 18) {
      convidado.openBar = true;
    }
    return convidado;
  });
  return result;
}
const convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);

const separarCamarote = function (lista) {
  const resultado = lista.filter((convidado) => {
    if (convidado.setor === "camarote") {
      return true;
    }
      return false;
  });
  return resultado;
};

console.log(separarCamarote(listaDeConvidados));