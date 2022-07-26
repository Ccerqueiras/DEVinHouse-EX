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
  setor: "arquibancada",
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

const separarPista = function (lista) {
  const resultado = lista.filter((convidado) => {
    if (convidado.setor === "pista") {
      return true;
    }
    return false;
  });
  return resultado;
};
const separarArquibancada = function (lista) {
  const resultado = lista.filter((convidado) => {
    if (convidado.setor === "arquibancada") {
      return true;
    }
    return false;
  });
  return resultado;
};
const separarCamarote = function (lista) {
  const resultado = lista.filter((convidado) => {
    if (convidado.setor === "camarote") {
      return true;
    }
    return false;
  });
  return resultado;
};
//outra forma !!!!!!!
const filtrarSetor = (lista, setor) => {
  return lista.filter((conv) => conv.setor === setor);
};


const listaCamarote = separarCamarote(listaDeConvidados);
const listaPista = separarPista(listaDeConvidados);
const listaArquibancada = separarArquibancada(listaDeConvidados);

const ulPista = document.getElementById("pista");
const ulCamarote = document.getElementById("camarote");
const ulArquibancada = document.getElementById("arquibancada");


const montaNome = (objPessoa) => {
  return `${objPessoa.nome} ${objPessoa.sobrenome}`;
};
listaArquibancada.forEach((convidado) => {
  ulArquibancada.innerHTML +=`<li>${convidado.nome} ${convidado.sobrenome}`;
});

listaCamarote.forEach((convidado) => {
  ulCamarote.innerHTML += `<li>${convidado.nome} ${convidado.sobrenome}`;
});

listaPista.forEach((convidado) => {
  ulPista.innerHTML += `<li>${convidado.nome} ${convidado.sobrenome}`;
});