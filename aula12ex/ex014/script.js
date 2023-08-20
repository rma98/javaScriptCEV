function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#c0b81c'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#fbb64a'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#3c3d4b'
    }
} 
