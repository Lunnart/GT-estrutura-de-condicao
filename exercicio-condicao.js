//### Aula 02 Lógica - Condicionais

// **Exercício 1: Cálculo de Desconto**

//Crie um programa que solicite o valor total de uma compra.Se o valor for maior que R$100, aplique um desconto de 10%. Exiba o valor final da compra com ou sem desconto.
// Então:
// Crie um programa que solicite o valor total de uma compra. 
//   const valordaCompra = Number(prompt("Digite o valor de sua compra!")) //Primeiro declare a vaiável

// Se o valor for maior que R$100, aplique um desconto de 10%. 
// if (valorTotal > 100) {
// valorTotal - (valorTotal * 0.1) //ou:
// const valorDesconto = valorTotal * 0.9

// Exiba o valor final da compra com ou sem desconto.
// alert('O valor total com desconto é' + valorDesconto) //ou
// aleart(`O valor total com desconto é R$ ${valorDesconto}`)


//Resolução:

if (valorTotal >100) {
    valorTotal - (valordaCompra*0,1)
    const valorDesconto = valorTotal*0.9
    alert('O valor total com desconto é '+ valorDesconto)
    

}else {
    const valorFalta = 100 - valorTotal
    alert(`Falta R${valorFalta} para receber o seu desconto`)
}

