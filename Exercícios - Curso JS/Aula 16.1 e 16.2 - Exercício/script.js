//Criando o array
let listaNum = []

//Identificou a div que vamos inserir texto quando o número fpr adicionado
let adicionandoNum = window.document.getElementById("adicionandoNum")

function adicionar() {
    //Pega o número que o usuário vai adicionar
    let numAdicionado = window.document.getElementById("numAdicionado").value

    if (numAdicionado == "" || numAdicionado < 1 || numAdicionado > 100) {
        window.alert("Você não digitou nenhum número ou diigitou número fora do range.")
    } else {
        console.log(numAdicionado)
        let numInt = parseInt(numAdicionado, 10)
        listaNum.push(numInt)
        adicionandoNum.innerHTML += `Valor ${numInt} adicionado <br>`
    }
}

function finalizar() {

    //Cria uma nova div
    let novaDiv = window.document.createElement("div")
    
    //Variável pra calcular a somatório dos valores da array
    let soma = 0
    for (i=0; i < listaNum.length; i++) {
        soma += listaNum[i]
    }

    //Define o conteúdo da nova div
    novaDiv.innerHTML = `
        <p>Ao todo, temos ${listaNum.length}<\p>
        <p>O maior valor informado foi ${Math.max(...listaNum)}</p>
        <p>O menor valor informado foi ${Math.min(...listaNum)}</p>
        <p>Somando todos os valores, temos ${soma}</p>
        <p> A média dos valores digitados é ${soma/listaNum.length}</p>
    `
    //Vai adicionar a nova div abaixo da seção
    //.querySelector("section") - Procura o primeiro elemento que corresponde ao seletor "section"
    let section = document.querySelector("section");
    //section - é a variável que criamos que vai pegar a primeira <section> do html
    //parentNode - vai pegar o elemento pai da <section>, ou seja, a <div>
    section.parentNode.insertBefore(novaDiv, section.nextSibling);

}