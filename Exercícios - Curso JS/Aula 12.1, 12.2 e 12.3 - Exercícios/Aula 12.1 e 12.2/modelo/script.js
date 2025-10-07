function carregar() {
    // Obtém o elemento com o ID 'msg' e armazena na variável 'msg'
    var msg = window.document.getElementById('msg');
    // Obtém o elemento com o ID 'imagem' e armazena na variável 'img'
    var img = window.document.getElementById('imagem');

    // Cria um novo objeto Date que representa a data e hora atuais
    var data = new Date();
    // Obtém a hora atual (de 0 a 23) a partir do objeto Date
    var hora = data.getHours();
    // Obtém os minutos atuais (de 0 a 59) a partir do objeto Date
    var minutos = data.getMinutes();

    //msg.innerHTML = "Agora são " + hora + ":" + minutos + "."
    msg.innerHTML = `Agora são ${hora}:${minutos}.`

    if (hora >= 0 && hora < 12) {
        img.src = "../imagens/foto_manha.jpg"
        window.document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        img.src = "../imagens/foto_tarde.jpg"
        window.document.body.style.background = "rgb(255, 165, 0)"
    } else {
        img.src = "../imagens/foto_noite.jpg"
        window.document.body.style.background = "black"
    }
}
