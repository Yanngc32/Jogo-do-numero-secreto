var listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo do número secreto";
exibirTextoNaTela('h1', "Jogo do número secreto");

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";
exibirTextoNaTela('p', "Escolha um número entre 1 e 10");

exibirMensagemInicial()

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('p', "Escolha um número entre 1 e 10");
    exibirTextoNaTela('h1', "Jogo do número secreto");
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciar(){
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial();
    limparCampo();
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute(){
    let chute = document.querySelector('input').value ;

    if (chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? "tentativas":"tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled')

    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++;
        limparCampo();

    }

}

function gerarNumeroAleatorio(){
    let numeroEescolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;
    if (quantidadeDeElementos == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEescolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEescolhido)
        return numeroEescolhido;
    }
}


