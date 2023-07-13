function carregar (){

    var msg = window.document.getElementById('msg')
    var aps = window.document.getElementById('msga')
    var foto = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Now is ${hora} hours.`

    if (hora >=0 && hora<=12){
        foto.src = 'imgs/manha.png'
        document.body.style.background = '#c5a54b'
        msga.innerHTML = 'Good morning!'
    
    }else if(hora >= 12 && hora<= 18) {
        foto.src = 'imgs/tarde.png'
        document.body.style.background = '#49a7ddea'
        msga.innerHTML = 'Good afternoon!'
        
    }else{
        foto.src = 'imgs/noite.png'
        document.body.style.background = '#0b1850e5'
        msga.innerHTML = 'Good night!'
    }
}
