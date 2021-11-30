let body = document.querySelector('body');

let listaUsuario = [
    { name: 'Bruno Henrique Verbinnen de Carvalho', userName: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },
    { name: 'João Henrique Meirles da Silva', userName: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Diego Planinscheck', userName: 'frst157' },
    { name: 'Camilly Vitoria da Rocha Goltz', userName: 'VitoriaCamilly' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' },
]

function criarLinha(name, userName) {
    let linha = document.createElement('li');

    linha.innerText = 'Nome: ' + name + ' -- > ' + 'UserName: ' + userName;

    let botaoGitHub = document.createElement('button');
    botaoGitHub.className = "botaoGitHub"
    botaoGitHub.innerText = "Clique aqui"

    botaoGitHub.onclick = function() {
        location.href = './userPage/repositorios.html?' + userName;
    }

    linha.appendChild(botaoGitHub);

    return linha;
}


function criarLista() {
    let listaAtual = document.querySelector('ol');

    if (listaAtual) {
        listaAtual.remove();
    }

    let lista = document.createElement('ol');

    listaUsuario.forEach(function criandoLinha(e) {
        lista.appendChild(criarLinha(e.name, e.userName));
    })

    body.appendChild(lista);
}

let botao = document.createElement('button');
botao.className = "botao";
botao.innerText = "Cadastrar pessoa"
document.body.appendChild(botao);

criarLista();

let fundo = document.createElement('div');
let botaoCancelar = document.createElement('button');
let modal = document.createElement('div');
let header = document.createElement('div');
let titulo = document.createElement('p');
let main = document.createElement('div');
let escrevaNome = document.createElement('p');
let nome = document.createElement('input');
let escrevaUserName = document.createElement('p');
let userName = document.createElement('input');
let footer = document.createElement('div');
let botaoCadastrar = document.createElement('button');
let campo = document.createElement('div');
let campoVerde = document.createElement('div');


function criarModal(header, main, footer) {
    fundo.className = ("fundo");
    fundo.style.backgroundColor = "rgba(221, 160, 221, 0.308)";

    body.appendChild(fundo);

    modal.className = 'modal';
    modal.style.backgroundColor = 'white';

    fundo.appendChild(modal);

    modal.appendChild(header);

    modal.appendChild(main);

    modal.appendChild(footer);

    modal.appendChild(campo);

    body.appendChild(campoVerde);

    return modal
}

function criarCadastro() {
    header.className = 'header'

    titulo.className = 'titulo';
    titulo.innerText = "CADASTRAR";
    header.appendChild(titulo);

    main.className = 'main'

    escrevaNome.className = 'textoInput';
    escrevaNome.innerText = "Escreva seu Nome: ";
    main.appendChild(escrevaNome);
    nome.className = 'inputs';

    main.appendChild(nome);

    escrevaUserName.className = 'textoInput';
    escrevaUserName.innerText = "Escreva seu Usuário: ";
    main.appendChild(escrevaUserName);
    userName.className = 'inputs';

    main.appendChild(userName);

    footer.className = 'footer'

    botaoCadastrar.className = "botaoCadastrar";
    botaoCadastrar.innerText = "Cadastrar"

    footer.appendChild(botaoCadastrar);

    botaoCancelar.className = "botaoCadastrar";
    botaoCancelar.innerText = "Cancelar"

    footer.appendChild(botaoCancelar);

    let retorno = {
        header: header,
        main: main,
        footer: footer
    }

    return retorno;
}

botaoCadastrar.onclick = function preenchimentoVazio() {
    let nomeInput = nome.value;

    let userNameInput = userName.value;


    if (nomeInput == '' || userNameInput == '') {
        campo.className = 'campo';
        campo.innerText = 'Todos os campos devem ser preenchidos!';
        let tempoVazio = setTimeout(function() {
            campo.remove();
        }, 2000)
    } else {
        nome.value = '';
        userName.value = '';

        fundo.removeChild(modal);
        body.removeChild(fundo);

        let infos = {
            name: nomeInput,
            userName: userNameInput
        }

        listaUsuario.push(infos);
        criarLista();
    }

    let retorno = {
        campo: campo
    }

    return retorno;
}

botao.onclick = function chamarModal() {
    let conteudo = criarCadastro();
    let modal = criarModal(conteudo.header, conteudo.main, conteudo.footer);

    return modal;
}

botaoCancelar.onclick = function cancelar() {
    body.removeChild(fundo);
    fundo.removeChild(modal);
    nome.value = '';
    userName.value = '';
}