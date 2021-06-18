/* Indica meus inimigos e os titans */
const viloes = document.querySelectorAll('.vilao');
const titans = document.querySelectorAll('.titan');

let vilaoSelecionado = 0;
let titanSelecionado = 0;
let nomeVilao = 0;

// ENTENDER QUE EU CLIQUEI EM UM INIMIGO, E SELECIONAR ESTE INIMIGO
for (const vilao of viloes) {

    vilao.addEventListener('click', function () {


        if (document.getElementsByClassName('vilao-selecionado').length < 1) { // caso a quantidade de classes 'inimigo-selecionado' forem MENOR que 1, ou seja, ZERO, executa o if abaixo
            this.classList.add('vilao-selecionado'); // adiciona a classe 'inimigo-selecionado' ao elemento clicado
            vilaoSelecionado = this.getAttribute('data-vida'); // adiciona o valor de 'data-vida' do elemento clicado à variável inimigoSelecionado
            nomeVilao = this.getAttribute('data-nome');
        } else { // caso a quantidade de classes 'inimigo-selecionado' forem MAIOR que 1, executa o else
            this.classList.remove('vilao-selecionado'); // ao ser clicado, remove a classe 'inimigo-selecionado' do meu elemento se este já possui esta classe
            vilaoSelecionado = 0
            nomevilao = 0
        }
    })
}
// ENTENDER QUE EU CLIQUEI EM UM TITAN, E SELECIONAR ESTA ARMA
for (const titan of titans) {

    titan.addEventListener('click', function () {

        if (document.getElementsByClassName('titan-selecionado').length < 1) {
            this.classList.add('titan-selecionado');
            titanSelecionado = this.getAttribute('data-dano');
            
        } else {
            this.classList.remove('titan-selecionado');
            titanSelecionado = 0
        }
    })
}

function calcularDano() {

    const danoDados = rolarOsDados();
    const danoTotal = danoDados + titanSelecionado;

    if (vilaoSelecionado == 0 || titanSelecionado == 0) {
        window.alert('Você precisa selecionar um inimigo e uma arma!!!');
    } else {
        if (danoTotal >= vilaoSelecionado) {
            window.alert(`Dano: ${danoTotal}! Você matou ${nomeVilao}!!!`);
        } else {
            window.alert(`Dano: ${danoTotal}... ${nomeVilao} sobreviveu ao ataque...`);
        }
    }
    document.getElementById('vilao').classList.remove('vilao-selecionado');
    document.getElementById('titan').classList.remove('titan-seleciondo');

}

function rolarOsDados() {
    const min = Math.ceil(1);
    const max = Math.floor(10);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}