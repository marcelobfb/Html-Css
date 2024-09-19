//* função every() - verifica se todos os elementos atendem as condições
function linha(){
    document.write(`<br>-------------------------------------------------`)
}
// ------------------------------------------------------------
nome=['thereza','eva','flora','liz']
nome2=['thereza','eva','flora','liz',10]
function n(elem){
    return (typeof elem =='string')
}
linha()
document.write(`<br>Todos os elementos sao do tipo string? ${nome.every(n)}`)
document.write(`<br>Todos os elementos sao do tipo string? ${nome2.every(n)}`)
// ----------------------------------------------
var numeros=[2,4,6,8,10]
var numeros2=[1,3,5,7,9]
pares=numeros.every(function(numero){
    return numero%2==0
})
impar=numeros2.every(function(num){
    return num%2!=0
})
linha()
document.write(`<br>Todos os numeros sao pares? ${pares}`)
document.write(`<br>Todos os numeros sao impar? ${impar}`)
// ----------------------------------------------
linha()
var m = numeros.every(function(n){
    return n>5
})
document.write(`<br>Todos os numeros são maiores que 5? ${m}`)
linha()
//*funçao some() - verifica se pelo menos 1 elemento atende a condição
var numero3=[1,3,5,4]
umPar=numero3.some(function(n){
    return n%2==0
})
document.write(`<br>Pelo menos 1 deles é par? ${umPar}`)
linha()
//*funcao filter() - filtrar o array
frutas=['banana','abacaxi','uva','laranja','manga','morango']
function f(elem){
    return (elem.indexOf('an')>0)
}
document.write(`<br>Frutas que tem 'an' são ${frutas.filter(f)}`)
linha()
numbers=[1,2,3,4,5,6,7,8,9,10]
par=numbers.filter(function(n){
    return n%2==0
})
document.write(`<br>Os numeros pares sao: ${par}`)
linha()
//*funcao map() - cria um novo vetor com os resultados da funcao aplicada
