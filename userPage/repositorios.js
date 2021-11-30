let user = document.location.search;

user = user.substring(1);


fetch(`https://fake-github.herokuapp.com/api/search/${user}`)
    .then(function(resultado) {
        resultado.json().then(function(data) {
            mostrarInfo(data.avatar_url, data.name, data.login);;

        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });


fetch(`https://fake-github.herokuapp.com/api/search/${user}/repos`)
    .then(function(resultado) {
        resultado.json().then(function(repos) {
            repos.forEach(function(e) {
                mostrarRepos(e.name, e.svn_url);
            });
        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });


function mostrarInfo(imagem, name, login) {
    let divInfos = document.createElement('div');
    document.body.appendChild(divInfos);
    divInfos.className = 'infos'

    let colocarImagem = document.createElement('img');
    colocarImagem.src = imagem;
    divInfos.appendChild(colocarImagem);
    colocarImagem.className = 'imagem';

    let colocarNome = document.createElement('p');
    colocarNome.innerText = 'Nome: ' + name;
    divInfos.appendChild(colocarNome);
    colocarNome.className = 'nome';

    let colocarLogin = document.createElement('p');
    colocarLogin.innerText = 'Login: ' + login;
    divInfos.appendChild(colocarLogin);
    colocarLogin.className = 'login';
}

let divRepos = document.createElement('div');
divRepos.className = 'Repositorio'

function mostrarRepos(name, svn_url) {

    let nomeRepos = document.createElement('p');
    divRepos.appendChild(nomeRepos);
    nomeRepos.innerText = 'Nome: ' + name;

    let linkRepos = document.createElement('p');
    divRepos.appendChild(linkRepos);
    linkRepos.innerText = 'Link: ' + svn_url;
}
document.body.appendChild(divRepos);