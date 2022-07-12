var nome;
var email;
var desc;

function imprimeInfo() {
    nome = document.getElementById("nome");
    nome = nome.value
    email = document.getElementById("email");
    email = email.value
    desc = document.getElementById("desc");
    desc = desc.value;
    console.log(`Nome: ${nome} - email: ${email} - Descrição: ${desc}`)
    alert(`Nome: ${nome} - email: ${email} - Descrição: ${desc}`);
}


