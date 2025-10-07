function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        //Vai criar um elemento <img> que vai ser inserido no html
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '../imagens/crianca_m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../imagens/adultoJovem_m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '../imagens/adultoMeiaIdade_m.jpg')
            } else {
                //idoso
                img.setAttribute('src', '../imagens/idosa_m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '../imagens/crianca_f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../imagens/adultoJovem_f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '../imagens/adultoMeiaIdade_f.jpg')
            } else {
                //idoso
                img.setAttribute('src', '../imagens/idosa_f.jpg')
            }
        }
   }
   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`
   res.appendChild(img);
}
