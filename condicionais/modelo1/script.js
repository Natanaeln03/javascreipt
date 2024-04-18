function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

       if (fano.value.length == 0 || Number(fano.value > ano)){
        alert('[ERROR] Verifique os dados e tente novamente!')
       } else {
        //alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var genero = ''//getElementsByName []
            if (fsex[0].checked) {
                genero = 'Homem'

                //teste se é criança, jovem, adulto ou idoso
                if (idade >= 0 && idade < 10) {
                    //criança
                } else if (idade < 21) {
                    //jovem
                } else if (idade < 50) {
                    //adulto
                } else {
                    //idoso
                }

            } else if (fsex[1]) {
                genero = 'Mulher'

                if (idade >= 0 && idade < 10) {
                    //criança
                } else if (idade < 21) {
                    //jovem
                } else if (idade < 50) {
                    //adulto
                } else {
                    //idoso
                }

            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       }
}
    