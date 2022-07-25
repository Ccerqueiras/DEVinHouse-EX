

function calculadora() {
    let operacao = prompt("Qual operação ? +, -, *, /")
    let n1 = parseInt(prompt("Primeiro numero ?"))
    let n2 = parseInt(prompt("Primeiro numero ?"))


    if (operacao == "+") {
        total = n1 + n2;
    } else if (operacao == "-") {
        total = n1 - n2
    } else if (operacao == "*") {
        total = n1 * n2
    } else if (operacao == "/") {
        total = n1 / n2
    } else {
        alert("invalido")
        calculadora();
    }
    console.log(total)
}
calculadora();