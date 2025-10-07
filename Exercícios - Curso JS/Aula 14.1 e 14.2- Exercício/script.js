function contar() {
    var inicio = window.document.getElementById("inicio").value;
    var fim = window.document.getElementById("fim").value;
    var passo = window.document.getElementById("passo").value;
    if (passo == 0) {
        window.alert("Não tem como o passo ser 0, vamos deixar o passo como 1")
        passo = 1
    }
    console.log(passo)

    //Convertendo de string para int
    inicio = parseInt(inicio, 10)
    fim = parseInt(fim, 10)
    passo = parseInt(passo,10)

    var resultado = window.document.getElementById("resultado");
    resultado.innerHTML = "Contando: <br>"

    var emoji_dedo = "👉🏻"
    var emoji_bandeira = "🏳️"
    for (var i=inicio; i <= fim; i = i + passo) {
        resultado.innerHTML += ""
        resultado.innerHTML += `Testando ${i} ${emoji_dedo} `
    }
    resultado.innerHTML += ` ${emoji_bandeira}`
}