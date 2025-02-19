document.getElementById('nome').addEventListener('click', atualizarNome);
document.getElementById('cpf').addEventListener('click', atualizarCpf);
document.getElementById('data').addEventListener('click', atualizarData);
document.getElementById('enderenco').addEventListener('click', atualizarEnderenco);
document.getElementById('telefone').addEventListener('click', atualizarTelefone);

function atualizarNome() {
    var nome = prompt('Insira seu Nome: ');
    document.getElementById('nome').textContent = "Nome: " + nome;
}

function atualizarCpf() {
    var cpf = prompt('Insira seu CPF: ');
    document.getElementById('cpf').textContent = "CPF: " + cpf;
}

function atualizarData() {
    var data = prompt('Insira sua Data de Nascimento:');
    document.getElementById('data').textContent = "Data de Nascimento: " + data;
}

function atualizarEnderenco() {
    var enderenco = prompt('Insira seu Enderenço: ');
    document.getElementById('enderenco').textContent = "Enderenço: " + enderenco;
}

function atualizarTelefone() {
    var telefone = prompt('Insira seu Telefone: ');
    document.getElementById('telefone').textContent = "Telefone: " + telefone;
}