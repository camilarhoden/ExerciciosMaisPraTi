function validaFormulario() {
    let validaCodigo = document.forms["cadastrarNovoFilme"]["codigo"].value;
    let validaData = document.forms["cadastrarNovoFilme"]["data"].value;
    let validaTitulo = document.forms["cadastrarNovoFilme"]["tituloFilme"].value;
    let validaDiretor = document.forms["cadastrarNovoFilme"]["diretor"].value;
    let validaAtor = document.forms["cadastrarNovoFilme"]["atorAtrizPrincipal"].value;
    let validaNotaImdb = document.forms["cadastrarNovoFilme"]["notaImdb"].value;
    let validaRadio = document.forms["cadastrarNovoFilme"]["radio"].value;
  

    if (validaCodigo == ""){
        alert ("O código deve ser preenchido");
        return false;
    }

    if (validaData == ""){
        alert ("A data deve ser preenchida");
        return false;
    }

    if (validaTitulo == ""){
        alert ("O título deve ser preenchido");
        return false;
    }

    if (validaDiretor == ""){
        alert ("O nome do diretor deve ser preenchido");
        return false;
    }

    if (validaAtor == ""){
        alert ("O nome do ator/atriz principal deve ser preenchido");
        return false;
    }

    if (validaNotaImdb == ""){
        alert ("A nota Imdb deve ser preenchida");
        return false;
    }

    if (validaRadio == ""){
        alert ("O gênero deve ser marcado");
        return false;
    }
}

function insere(){
    let codigo = document.forms["cadastrarNovoFilme"]["codigo"].value;
    let data = document.forms["cadastrarNovoFilme"]["data"].value;
    let titulo = document.forms["cadastrarNovoFilme"]["tituloFilme"].value;
    let diretor = document.forms["cadastrarNovoFilme"]["diretor"].value;
    let ator = document.forms["cadastrarNovoFilme"]["atorAtrizPrincipal"].value;
    let notaImdb = document.forms["cadastrarNovoFilme"]["notaImdb"].value;
    let radio = document.forms["cadastrarNovoFilme"]["inlineRadioOptions"].value;

    let inserir = window.document.getElementById("inserirTabela");

    inserir.innerHTML = `<th scope="row"> ${codigo} </th>`;
    inserir.innerHTML += `<td> ${titulo} </td>`;
    inserir.innerHTML += `<td> ${diretor} </td>`;
    inserir.innerHTML += `<td> ${data} </td>`;
    inserir.innerHTML += `<td> ${radio} </td>`;
    inserir.innerHTML += `<td> ${ator} </td>`;
    inserir.innerHTML += `<td> ${notaImdb}/10 </td>`;

}