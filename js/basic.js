// console.log('Olá, Javascript!')
 
// var userName='Luciano Boteleiro'

// document.getElementById('userName').innerHTML = userName
// // //Variaves
// // var nome = 'Mestre Yoda'
// // var idade =100
// // var jedi = true

// function soma(n1,n2) {
//     console.log(n1+n2)

// }

// soma(2,3)
// function boasVindas(nome){
//     alert( nome+ ', Sejam bem vindo(a)')
// }
// boasVindas('Luciano')

//CONTROLE DE FLUXOS//
//BDD//()
//sISTEMA DE UM BANCO

//SENDO UM CLIENTE CORRENTISTA DO BANCO(ATOR)
//POSSO SACAR DINHEIRO EM CAIXAS ELETRONICOS()
//PARA PODER COMPRAR EM LUGAR QUE NÃO ACITA, O CARTÃO DE DÉBITO OU CRÉDITOS

//Cenario 1: Saque com sucesso
//dado que meu saldo é de 1000 reais
//quando faço um saque de 500 reais
//então o valor deve ser deduzido do saldo
// var saldo =1000
// function saque(valor) {
//     if(valor > saldo){
//         console.log('valor do saque superior ao saldo')
//     } else if(valor > 700){
//         console.log('Valor do saque maior do que permitido por operação')
//     }
//     else {
//         saldo = saldo - valor
//     }
    
// }

// saque(700)
// console.log('seu saldo é de ' +  saldo)


//Cenario 2: saque com valor superiro ao Saldo
//Dado meu saldo é de 1000 reais
//quando faço um saque de 1001 reais ( o que deve acontecer P.o?)
//então não deve deduzir o saldo 
//e deve mostrar uma msg d alerta informando que o valor é superior ao salo


//Cenario 3 saque com valormaximo
//Dado que meu saldo é de 1000 e o vaor maximo por operação é de 700
//quando faço um saque no valor de 701
//entaõ não deve deduzir do saldo
//e deve mostara uma msg de alerta informando que o valor é superior ao limite diario


// Arrays//
// var gaveteiro = ['Meias','gravatas','Documntos','Salgadinhos']

// console.log(gaveteiro[2])

//var personagens = ['yoda','leia','darth','luciano']
// //console.log(typeof personagens)
// personagens.push('c3p0')
// personagens.pop()//remove o ultimo
// console.log(personagens)

// personagens = personagens.filter(function(p){
//     return p !== 'yoda'//deixa de fora
// })

// personagens = personagens.filter(function(p){
//     return p === 'yoda'//deixa de fora
// })
// console.log(personagens)

//CONTROLE DE REPETIÇÃO
var personagens = ['yoda','leia','darth','luciano','claudia']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for(var i in personagens){
//     console.log(personagens[i])
// }

// for (var i =0; i <=10; i++){
//     console.log(i)
// }


//OBJETO
var yoda ={}
yoda.nome='Mestre Yoda'
yoda.idade=100
yoda.jedi=true


console.log(yoda)

var luciano = {
    nome :'Luciano',
    idade:45,
    jedi: false,
}

console.log(luciano)