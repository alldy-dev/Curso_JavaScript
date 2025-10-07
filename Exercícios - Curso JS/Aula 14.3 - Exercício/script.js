function gerar_tabuada() {
    //Vai pegar o numero do input do html
    var numero = window.document.getElementById("numero").value
    //Acima ele pega o input do tipo número, mas deixa no tipo string pro js. Precisamos converter pra número int
    var nummeroInt = parseInt(numero, 10);

    var resultado = window.document.getElementById("resultado")
    resultado.innerHTML = ""

    for (let i=0; i <= 10; i++) {
        let calc = nummeroInt * i
        resultado.innerHTML += `8 x ${i} = ${calc}<br>`
    }
    console.log(numero)
}