//objetivo: Subtrair a data informada pelo usuário pela data atual (new Date)
function contar() {
    var datainformada = document.getElementById('txtdata')     
    var res = document.getElementById('res')
    var gif = document.getElementById('imagem')
   

    // se valor for 0 em algum dos campos retorna o erro:
    if (datainformada.value.length == 0 | days <= -1) {
      window.alert('[ERRO] Informe uma data válida!')
      res.innerHTML = 'Impossivel contar!'     
      document.body.style.background = '#224656' //muda a cor
      gif.src = 'img/carminha3.jpg'

    } else {  
        var datainformadasaida = new Date(datainformada.value) 
        var datahoje = new Date() //data hoje 
        //subtrai data      
        var diff = (datainformadasaida.getTime() - datahoje.getTime());           
        //converter os milisegundos em dias
        var days = Math.ceil(diff / (1000 * 60 * 60 * 24)+1); 
        
        res.innerHTML = `Faltam ${days} dias para as suas férias!` 
        gif.src = 'img/dogpraia.jpg'

        if (days <= -0) {
          window.alert('[ERRO] Informe uma data!')
          res.innerHTML = 'Impossivel contar!'     
          document.body.style.background = '#224656' //muda a cor
          gif.src = 'img/carminha3.jpg'

         }



      }
      
    }

  
  