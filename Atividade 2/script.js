function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO, arrume os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano. value)
        var gen = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gen = 'Boy'
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'bebehomem.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'jovemhomem.jpg')
            }else if ( idade < 50){
                img.setAttribute('src', 'adultohomem.jpg')
            }else{
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked){
            gen = 'Girl'
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'bebemulher.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'jovemmulher.jpg')
            }else if ( idade < 50){
                img.setAttribute('src', 'adultamulher.jpg')
            }else{
                img.setAttribute('src', 'idosamulher.jpg')              
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p> Detection ${gen} with ${idade} years.</p>` 
        res.appendChild(img)
        
        img.style.width="300px"
        img.style.borderRadius="50%"
    }
}