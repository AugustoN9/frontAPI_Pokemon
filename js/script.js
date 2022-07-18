var formulario = document.querySelector('form');

formulario.addEventListener('submit',function(e){
    //Bloqueia o refresh da pagina
    e.preventDefault()

    //url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    //valor do input name
    let nome = document.getElementById("name")

    //Concatenar a url com o input name
    urlForm = urlForm + this.name.value

    //transformar os valores em minusculas
    urlForm = urlForm.toLocaleLowerCase()

    //ID Content
    let resposta = document.getElementById('content')

    //ID ImgPokemon
    let imagem = document.getElementById('imgPokemon')

    //RESPOPSTA em HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data){
            console.log(data)
            html = 'Nome: '+ data.name + '<br>'
            html = html + 'Id: ' + data.id + '<br>'
            html = html + 'Type: ' + data.types[0].type.name
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function (err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokemon não encontrado! '
            }else{
                html = 'Erro: ' + err
            }

            resposta.innerHTML = html
            imagem.innerHTML = "<img src= ./image/error.png >"
            console.log(err)
        })

    //alert(urlForm)

});

function maiuscula(val){
    return val[0].toUppperCase() + val.substr(1)
}