function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-boy.png')
            }  else if (idade < 50) {
                img.setAttribute('src', 'imagens/man.png')
            } else {
                img.setAttribute('src', 'imagens/old-man.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-woman.png')
            }  else if (idade < 50) {
                img.setAttribute('src', 'imagens/woman.png')
            } else {
                img.setAttribute('src', 'imagens/old-woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}