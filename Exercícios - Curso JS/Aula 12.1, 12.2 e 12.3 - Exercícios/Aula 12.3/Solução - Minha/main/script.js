function verificar() {
    //Calculando a idade
    const ano_nascimento = window.document.getElementById("ano_nascimento").value;
    console.log(ano_nascimento);
    //Pegando o ano vigente
    const ano_vigente = new Date().getFullYear();
    //Calcular idade
    const idade = ano_vigente - ano_nascimento;
    //Verificando se o usuário escolheu sexo masculino ou feminino
    const genero_selecionado = window.document.querySelector('input[name="genero"]:checked').value;
    console.log(genero_selecionado);
    //Pegando a <div> que irá aparecer o nosso resultado
    const resultado = window.document.getElementById("resultado")
    //Criar variável para gênero
    const m = 'masculino'
    const f = 'feminino'
    //Vai criar a variável pra poder substituir a imagem
    const imagem = window.document.getElementById('imagem')
    //Condição para bebê
    if (idade <= 2 && genero_selecionado === f) {
        resultado.innerHTML = `Detectamos uma bebê menina com ${idade} ano`
        imagem.src = "../imagens/bebe_f.jpg"
        imagem.style.display = 'block'; //vai tirar o none e deixar o block, desta forma a imagem vai aparecer
    } else if (idade <= 2 && genero_selecionado === m) {
        resultado.innerHTML = `Detectamos uma bebê menino com ${idade} ano`
        imagem.src = "../imagens/bebe_m.jpg"
        imagem.style.display = 'block';
    //Condição para criança
    } else if (idade >= 3 && idade <= 12 && genero_selecionado === f) {
        resultado.innerHTML = `Detectamos uma criança menina com ${idade} anos`
        imagem.src = "../imagens/crianca_f.jpg"
        imagem.style.display = 'block';
    } else if (idade >= 3 && idade <= 12 && genero_selecionado === m) {
        resultado.innerHTML = `Detectamos uma criança menino com ${idade} anos`
        imagem.src = "../imagens/crianca_m.jpg"
        imagem.style.display = 'block';
    //Condição para adolescente
    } else if (idade >= 13 && idade <= 17 && genero_selecionado === f) {
        resultado.innerHTML = `Detectamos um adolescente com ${idade} anos`
        imagem.src = "../imagens/adolescente_f.jpg"
        imagem.style.display = 'block';
    } else if (idade >= 13 && idade <= 17 && genero_selecionado === m) {
        resultado.innerHTML = `Detectamos uma adolescente com ${idade} anos`
        imagem.src = "../imagens/adolescente_m.jpg"
        imagem.style.display = 'block';
    //Condição para adulto jovem
    } else if (idade >= 18 && idade <= 24 && genero_selecionado === f) {
        resultado.innerHTML = `Detectamos uma adulto jovem com ${idade} anos`
        imagem.src = "../imagens/adultoJovem_f.jpg"
        imagem.style.display = 'block';
    } else if (idade >= 18 && idade <= 24 && genero_selecionado === m) {
        resultado.innerHTML = `Detectamos um adulto jovem com ${idade} anos`
        imagem.src = "../imagens/adultoJovem_m.jpg"
        imagem.style.display = 'block';
    //Condição para adulto meia idade
    } else if (idade >= 25 && idade <= 64 && genero_selecionado === f) {
        resultado.innerHTML = `Detectamos um adulto com ${idade} anos`
        imagem.src = "../imagens/adultoMeiaIdade_f.jpg"
        imagem.style.display = 'block';
    } else if (idade >= 25  && idade <= 64 && genero_selecionado === m) {
        resultado.innerHTML = `Detectamos uma adulta com ${idade} anos`
        imagem.src = "../imagens/adultoMeiaIdade_m.jpg"
        imagem.style.display = 'block';
    //Condição para idoso
    } else if (idade >= 65 && genero_selecionado === f) {
        resultado.innerHTML = `Detectamos uma idosa com ${idade} anos`
        imagem.src = "../imagens/idosa_f.jpg"
        imagem.style.display = 'block';
    } else if (idade >= 65 && genero_selecionado === m) {
        resultado.innerHTML = `Detectamos um idoso com ${idade} anos`
        imagem.src = "../imagens/idosa_m.jpg"
        imagem.style.display = 'block';
    }
}