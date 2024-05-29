function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >=0 && hora < 12){
        //Bom Dia!
        img.src = 'foto-manha.png'
        document.body.style.background = '#fbe271'
        document.getElementsByClassName('texto')[0].style.color = 'black'
        document.getElementsByClassName('texto')[1].style.color = 'black'
    } else if (hora >= 12 && hora <=18){
        //Boa Tarde!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#fe8920'
    } else {
        //Boa Noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#1f2540'
    }

}