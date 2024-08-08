const form = document.getElementById('form-comparar');
const inputA = document.getElementById('valorA');
const inputB = document.getElementById('valorB');
const mensagemSucesso = document.querySelector('.mensagemSucesso');
const mensagemErro = document.querySelector('.mensagemFalha');

form.addEventListener('submit', function(e) {
    e.preventDefault();

const valorinputA = Number(inputA.value);
const valorInputB = Number(inputB.value);

const TextoErro = 'O formulario é invalido, o valor B deve ser maior que o valor A'
const TextoSucesso= 'O formulario foi enviado com sucesso, o valor B é maior que o valor A'

if (valorInputB > valorinputA){
    mensagemSucesso.innerHTML = TextoSucesso;
    mensagemSucesso.style.display = 'flex';
    mensagemErro.style.display = 'none';
} 

else {
    mensagemErro.innerHTML = TextoErro;
    mensagemErro.style.display='flex';
    mensagemSucesso.style.display = 'none';    
}






























});