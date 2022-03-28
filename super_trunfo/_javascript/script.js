var carta1 = 
{
    nome: "Clarke",
    imagem: "https://pyxis.nymag.com/v1/imgs/f2c/caf/790143795c3c58b07b6221e11d3f2afcc1-21-clark-100.rsquare.w700.jpg",
    atributos:
    {
        Ataque: 8,
        Defesa: 6,
        Inteligência: 9,
        Velocidade: 5
    }
}
var carta2 = 
{
    nome: "Octavia",
    imagem: "http://pm1.narvii.com/6865/b17d2188ec8ca9f39d928c49fc69847600ab7672r1-759-500v2_uhq.jpg",
    atributos:
    {
        Ataque: 10,
        Defesa: 8,
        Inteligência: 6,
        Velocidade: 8
    }
}
var carta3 = 
{
    nome: "Raven",
    imagem: "http://pm1.narvii.com/7063/5702f4217a935f54c8edca4dae647c9de6c97ff8r1-736-489v2_00.jpg",
    atributos:
    {
        Ataque: 7,
        Defesa: 5,
        Inteligência: 10,
        Velocidade: 4
    }
}
var carta4 = 
{
    nome: "Bellamy",
    imagem: "https://i.pinimg.com/474x/ff/ec/71/ffec71ec523130cf23d1ea9dfe4c75c3.jpg",
    atributos:
    {
        Ataque: 8,
        Defesa: 7,
        Inteligência: 6,
        Velocidade: 6
    }
}
var carta5 = 
{
    nome: "Lincoln",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2016/04/the-100-lincoln.jpg",
    atributos:
    {
        Ataque: 10,
        Defesa: 9,
        Inteligência: 4,
        Velocidade: 7
    }
}
var carta6 = 
{
    nome: "Lexa",
    imagem: "https://www.thewrap.com/wp-content/uploads/2015/07/alycia-debnam-carey-the-1001.jpg",
    atributos:
    {
        Ataque: 9,
        Defesa: 8,
        Inteligência: 3,
        Velocidade: 7
    }
}
var carta7 = 
{
    nome: "Indra",
    imagem: "https://plotwist.com.br/wp-content/uploads/2016/07/0084-e1469224788228.jpg",
    atributos:
    {
        Ataque: 8,
        Defesa: 7,
        Inteligência: 8,
        Velocidade: 8
    }
}
var carta8 = 
{
    nome: "Finn",
    imagem: "https://i.pinimg.com/originals/68/21/b8/6821b84415d68f7b650115d8cc631624.jpg",
    atributos:
    {
        Ataque: 6,
        Defesa: 8,
        Inteligência: 10,
        Velocidade: 8
    }
}
var carta9 = 
{
    nome: "Abby",
    imagem: "https://static.wikia.nocookie.net/p__/images/a/ad/Abby100heroes.jpg/revision/latest/top-crop/width/360/height/360?cb=20210128175257&path-prefix=protagonist",
    atributos:
    {
        Ataque: 6,
        Defesa: 5,
        Inteligência: 10,
        Velocidade: 6
    }
}
var carta10 = 
{
    nome: "Kane",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/the-100-henry-ian-cusick.jpg",
    atributos:
    {
        Ataque: 7,
        Defesa:8,
        Inteligência: 9,
        Velocidade: 7
    }
}

var baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]

var carta_maquina 
var carta_jogador

function sortear_carta()
{
    var indice_carta_maquina = parseInt (Math.random() * 10)
    carta_maquina = baralho[indice_carta_maquina]

    var indice_carta_jogador = parseInt (Math.random() * 10)
    while (indice_carta_jogador == indice_carta_maquina)
    {
        indice_carta_jogador = parseInt (Math.random() * 10)
    }
    carta_jogador = baralho[indice_carta_jogador]

    document.getElementById("sortear").disabled = true
    document.getElementById("jogar").disabled = false

    exibir_carta_jogador()
}

function exibir_carta_jogador()
{
    var div_carta_jogador = document.getElementById("carta_jogador")
    div_carta_jogador.style.backgroundImage="url(" + carta_jogador.imagem + ")" 
    //div_carta_jogador.style.backgroundImage= `url(${carta_jogador.imagem})`   - a crase é para entrar no css e o $ no js

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta_status'>"

    var opcoes_texto = ""

    for (var atributo in carta_jogador.atributos)
    {
        opcoes_texto += "<input type='radio' name='atributo' id='atributo' value='" + atributo + "'>" + atributo + " " + carta_jogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta_subtitle">${carta_jogador.nome}</p>`

    div_carta_jogador.innerHTML = moldura + nome + tagHTML + opcoes_texto + "</div>"
}

function obtem_atributo_selec()
{
    var radio_atributos = document.getElementsByName("atributo")

    for(var i = 0; i < radio_atributos.length; i++)
    {
        if (radio_atributos[i].checked == true)
        {
            return radio_atributos[i].value
        }
    }
}

function jogar()
{
    var atributo_selec = obtem_atributo_selec()
    var result = document.getElementById("resultado")
    var valor_carta_jogador = carta_jogador.atributos[atributo_selec]
    var valor_carta_maquina = carta_maquina.atributos[atributo_selec]

    if(valor_carta_jogador > valor_carta_maquina)
    {
        result.innerHTML = "<p class='resultado_final'> Heda, Heda, Heda! (você venceu)</p>"
    }
    else if (valor_carta_jogador < valor_carta_maquina)
    {
        result.innerHTML = "<p class='resultado_final'> Yu gonplei odon ste! May we meet again. (você morreu)</p>"
    }
    else
    {
        result.innerHTML = "<p class='resultado_final'> Jus drein jus daun! (vingança) </p>"
    }

    document.getElementById("jogar").disabled = true
    exibir_carta_maquina()
    document.getElementById("sortear").disabled = false
}

function exibir_carta_maquina()
{
    var div_carta_maquina = document.getElementById("carta_maquina")
    div_carta_maquina.style.backgroundImage="url(" + carta_maquina.imagem + ")" 
    //div_carta_jogador.style.backgroundImage= `url(${carta_jogador.imagem})`   - a crase é para entrar no css e o $ no js

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta_status'>"

    var opcoes_texto = ""

    for (var atributo in carta_maquina.atributos)
    {
        opcoes_texto += "<p name='atributo' id='atributo' value='" + atributo + "'>" + atributo + " " + carta_maquina.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta_subtitle">${carta_maquina.nome}</p>`

    div_carta_maquina.innerHTML = moldura + nome + tagHTML + opcoes_texto + "</div>"
}